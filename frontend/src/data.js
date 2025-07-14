// --- SEED DATA ---
export const courses = ['ETEL', 'ADA', 'DS', 'CNAT', 'EDA', 'ETIQ', 'EVE'];
const years = ['1º', '2º', '3º'];
let teamIdCounter = 1;
const seededTeams = [];
for (const course of courses) {
    for (const year of years) {
        seededTeams.push({
            id: teamIdCounter++,
            name: `${year} ${course}`,
            course: course,
            playersCount: Math.floor(Math.random() * 5) + 10, // 10 to 14 players
            players: Array.from({ length: 5 }, (_, i) => ({
                id: i + 1,
                name: `Jogador ${i + 1} ${course}`,
                points: Math.floor(Math.random() * 10),
                yellow: Math.floor(Math.random() * 2),
                red: Math.random() > 0.9 ? 1 : 0,
            }))
        });
    }
}

// const filteredTeams = seededTeams.filter(team => team.course !== "ADA");

export const mockData = {
  seasons: [
    { id: 1, name: 'INTERCLASSES - TEMPORADA 7', date: '26/05 - 30/05', location: 'ETEC JOÃO BELARMINO', description: 'A 7ª edição dos jogos interclasses da ETEC João Belarmino, promovendo a integração e o espírito esportivo entre os alunos de todos os cursos.', modalities: 'Futsal, Vôlei, Basquete e Handebol' },
  ],
  teams: seededTeams, // filteredTeams
  registrations: {
    sports: [
      { id: 1, name: 'Futsal', description: 'O Futsal será disputado na quadra de cima, com times de 5 jogadores em quadra e pontuação baseada em gols.' },
      { id: 2, name: 'Basquete', description: 'O Basquete terá seus jogos na quadra de baixo, com regras oficiais da CBB.' },
      { id: 3, name: 'Vôlei', description: 'As partidas de Vôlei acontecerão na quadra de baixo, em formato de sets.' },
      { id: 4, name: 'Handebol', description: 'O Handebol será jogado na quadra de cima, seguindo as regras da IHF.' },
    ],
    locations: [
      { id: 1, name: 'QUADRA DE CIMA', description: 'Esportes: Handebol & Futsal' },
      { id: 2, name: 'QUADRA DE BAIXO', description: 'Esportes: Vôlei e Basquete' },
    ]
  },
  matches: [
    { id: 1, team1: '1º DS', team2: '1º ADA', result: '5:3', penaltyResult: null, modality: 'Futsal', category: 'Masculino', location: 'Quadra de Cima', status: 'Anterior' },
    { id: 2, team1: '2º ETEL', team2: '2º CNAT', result: '2:1', penaltyResult: null, modality: 'Vôlei', category: 'Feminino', location: 'Quadra de Baixo', status: 'Anterior' },
    { id: 3, team1: '3º EVE', team2: '3º EDA', result: 'Aguardando', penaltyResult: null, modality: 'Basquete', category: 'Masculino', location: 'Quadra de Baixo', status: 'Próximo' },
    { id: 4, team1: '1º ETIQ', team2: '2º DS', result: 'Aguardando', penaltyResult: null, modality: 'Handebol', category: 'Misto', location: 'Quadra de Cima', status: 'Próximo' },
    { id: 5, team1: '3º ADA', team2: '1º ETEL', result: '10:10', penaltyResult: '3:2', modality: 'Basquete', category: 'Feminino', location: 'Quadra de Baixo', status: 'Anterior' },
  ],
  highlightedPlayers: {
      futsal: [{name: 'Carlos Dias (1º DS)', points: 8}, {name: 'Mariana Lima (1º ADA)', points: 6}],
      volei: [{name: 'Juliana Alves (2º ETEL)', points: 15}, {name: 'Ricardo Souza (2º CNAT)', points: 12}],
  }
};
