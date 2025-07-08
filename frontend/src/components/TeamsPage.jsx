'use client';
import React, { useState } from 'react';
import { Trash2, Plus, UserCircle } from 'lucide-react';
import { Modal } from '@/components/Modal';
import { Button, Input, CardSplat } from '@/components/common';
import { mockData, courses } from '@/data';

export const TeamsPage = () => {
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState('Todos');
    
    const courseFilters = ['Todos', ...courses];

    const openDetails = (team) => {
        setSelectedTeam(team);
        setIsDetailOpen(true);
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">TIMES</h1>
                <div className="flex items-center gap-4">
                    <button className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"><Trash2 size={24} /></button>
                    <Button onClick={() => openDetails(null)}>Criar Novo Time</Button>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {courseFilters.map(course => (
                    <button
                        key={course}
                        onClick={() => setSelectedCourse(course)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                            selectedCourse === course
                            ? 'bg-red-600 text-white shadow-md'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                        {course}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
                {mockData.teams
                    .filter(team => selectedCourse === 'Todos' || team.course === selectedCourse)
                    .map(team => (
                    <div key={team.id} onClick={() => openDetails(team)} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 relative overflow-hidden cursor-pointer hover:border-red-500 dark:hover:border-red-500">
                        <input type="checkbox" className="absolute top-2 right-2 z-20 form-checkbox h-4 w-4 text-red-600 rounded border-gray-300 dark:border-gray-600 focus:ring-red-500 bg-white dark:bg-gray-900" onClick={e => e.stopPropagation()} />
                        <div className="relative z-10 text-center">
                            <p className="text-xl font-bold my-4 text-gray-900 dark:text-gray-100">{team.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Jogadores: {team.playersCount}</p>
                        </div>
                        <CardSplat />
                    </div>
                ))}
            </div>
            <Modal isOpen={isDetailOpen} onClose={() => setIsDetailOpen(false)} title={selectedTeam ? selectedTeam.name : 'Criar Novo Time'} size="max-w-2xl">
                {selectedTeam ? (
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-bold border-b-2 border-gray-200 dark:border-gray-700 w-full pb-1 text-gray-900 dark:text-gray-100">JOGADORES</h4>
                                <button className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center -mb-2 flex-shrink-0"><Plus size={16} /></button>
                            </div>
                            <div className="space-y-2">
                                {selectedTeam.players.map(p => (
                                    <div key={p.id} className="flex items-center justify-between text-gray-700 dark:text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <UserCircle size={24} className="text-gray-400" />
                                            <span>{p.name}</span>
                                            <span className="font-bold">{p.points} PONTOS</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-red-600">{p.red}</span>
                                            <span className="font-bold text-yellow-500">{p.yellow}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                     <form className="space-y-4">
                        <Input label="Nome do Time" placeholder="Ex: 1º ETIM" />
                        <Input label="Curso" placeholder="Ex: DS" />
                        <div className="flex justify-end pt-4">
                            <Button type="submit">Salvar</Button>
                        </div>
                    </form>
                )}
            </Modal>
        </div>
    );
};
