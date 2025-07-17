'use client';
import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { SumulaModal } from '@/components/SumulaModal';
import { Button, CardSplat, SoccerBallIcon } from '@/components/common';
import { mockData } from '@/data';

export const DashboardPage = () => {
  const [filters, setFilters] = useState(['Masculino', 'Feminino', 'Jogos Anteriores']);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const removeFilter = (filterToRemove) => setFilters(filters.filter(f => f !== filterToRemove));

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">GERAL</h1>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">PARTIDAS ATUAIS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockData.matches.filter(m => m.status === 'Próximo').slice(0, 2).map(match => (
            <div key={match.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm text-gray-500 dark:text-gray-400">PARTIDA ATUAL</p>
                <p className="text-2xl font-bold my-2 text-gray-900 dark:text-gray-100">{match.team1} VS {match.team2}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Esporte: {match.modality}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Modalidade: {match.category}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Local: {match.location}</p>
              </div>
              <CardSplat />
              <div className="absolute bottom-4 right-4 z-10"><SoccerBallIcon /></div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">JOGADORES(AS) EM DESTAQUE</h2>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-x-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="pr-0 md:pr-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">FUTSAL</h3>
              {mockData.highlightedPlayers.futsal.map((player, i) => <p key={i} className="text-gray-600 dark:text-gray-300">{player.name} - {player.points} pontos</p>)}
            </div>
            <div className="pl-0 md:pl-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">VÔLEI</h3>
              {mockData.highlightedPlayers.volei.map((player, i) => <p key={i} className="text-gray-600 dark:text-gray-300">{player.name} - {player.points} pontos</p>)}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">PARTIDAS</h2>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {filters.map(f => (
            <div key={f} className="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-200 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-2">
              <span>{f}</span>
              <button onClick={() => removeFilter(f)}><X size={14} /></button>
            </div>
          ))}
          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"><Filter size={20} /></button>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockData.matches.map(match => (
                <tr key={match.id}>
                  <td className="p-4 text-gray-800 dark:text-gray-200 font-semibold">{match.team1} VS {match.team2}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">{match.modality}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">{match.category}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">{match.location}</td>
                  <td className="p-4 text-right"><Button onClick={() => setSelectedMatch(match)}>Ver Súmula</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <SumulaModal isOpen={!!selectedMatch} onClose={() => setSelectedMatch(null)} match={selectedMatch} />
    </div>
  );
};
