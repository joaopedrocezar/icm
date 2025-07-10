'use client';
import React, { useState, useEffect } from 'react';
import { Trash2, Plus, UserCircle } from 'lucide-react';
import { Modal } from '@/components/Modal';
import { Button, Input, CardSplat } from '@/components/common';
import { courses } from '@/data';

export const TeamsPage = () => {
    const [teams, setTeams] = useState([]);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState('Todos');
    const [ano, setAno] = useState('');
    const [curso, setCurso] = useState('');
    const [loading, setLoading] = useState(false);

    const courseFilters = ['Todos', ...courses];

    // Buscar times do banco ao carregar
    useEffect(() => {
        fetch('/api/teams')
            .then(res => res.json())
            .then(setTeams);
    }, []);

    // Filtrar times pelo curso selecionado
    const filteredTeams = selectedCourse === 'Todos'
        ? teams
        : teams.filter(team => team.nome_time.includes(selectedCourse));

    // Abrir modal para criar novo time
    const openCreate = () => {
        setSelectedTeam(null);
        setAno('');
        setCurso('');
        setIsDetailOpen(true);
    };

    // Enviar novo time para o backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!ano || !curso) return;
        setLoading(true);
        const nome_time = `${ano}${curso}`;
        const res = await fetch('/api/teams', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome_time }),
        });
        if (res.ok) {
            const newTeam = await res.json();
            setTeams([...teams, newTeam]);
            setIsDetailOpen(false);
            setAno('');
            setCurso('');
        }
        setLoading(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">TIMES</h1>
                <div className="flex items-center gap-4">
                    <Button onClick={openCreate}><Plus size={18} className="mr-2" />Criar Novo Time</Button>
                </div>
            </div>

            {/* Filtro de cursos */}
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

            {/* Cards dos times */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
                {filteredTeams.length === 0 ? (
                    <p className="col-span-full text-gray-500">Nenhum time cadastrado.</p>
                ) : (
                    filteredTeams.map(team => (
                        <div
                            key={team.id_times}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 relative overflow-hidden cursor-pointer hover:border-red-500 dark:hover:border-red-500"
                        >
                            <div className="relative z-10 text-center">
                                <p className="text-xl font-bold my-4 text-gray-900 dark:text-gray-100">{team.nome_time}</p>
                            </div>
                            <CardSplat />
                        </div>
                    ))
                )}
            </div>

            {/* Modal para criar novo time */}
            <Modal isOpen={isDetailOpen} onClose={() => setIsDetailOpen(false)} title="Criar Novo Time" size="max-w-2xl">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input label="Ano do Time" placeholder="Ex: 1º" value={ano} onChange={e => setAno(e.target.value)} />
                    <Input label="Curso do Time" placeholder="Ex: ETIQ" value={curso} onChange={e => setCurso(e.target.value)} />
                    <div className="flex justify-end pt-4">
                        <Button type="submit" disabled={loading}>{loading ? 'Salvando...' : 'Salvar'}</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};