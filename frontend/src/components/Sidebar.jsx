'use client';

import { Home, Users, Plus, Shield, Calendar, FileText, LogOut, Moon, Sun, ChevronsLeft } from 'lucide-react';

const NavLink = ({ icon, label, pageName, isSidebarOpen, currentPage, setCurrentPage }) => (
    <li>
      <button
        onClick={() => setCurrentPage(pageName)}
        className={`flex items-center w-full rounded-md transition-colors ${
          isSidebarOpen ? 'px-4 py-2' : 'p-2 justify-center'
        } ${
          currentPage === pageName
            ? 'bg-red-600 text-white'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        {icon}
        <span
          className={`ml-3 font-medium transition-all duration-200 whitespace-nowrap ${
            isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
          }`}
        >
          {label}
        </span>
      </button>
    </li>
);

export const Sidebar = ({ isSidebarOpen, toggleSidebar, currentPage, setCurrentPage, isDarkMode, toggleDarkMode, logout }) => {
    const logoUrl = '/Logo.png';
    const logoRecolhidaUrl = '/LogoRecolhida.png';

    return (
        <aside className={`bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex-shrink-0 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                <img src={isSidebarOpen ? logoUrl : logoRecolhidaUrl} alt="ICM Logo" className={`transition-all duration-300 ${isSidebarOpen ? 'h-8' : 'h-10'}`} />
                <button onClick={toggleSidebar} className="text-gray-500 dark:text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <ChevronsLeft className={`transition-transform duration-300 ${isSidebarOpen ? '' : 'rotate-180'}`} />
                </button>
            </div>
            <nav className="flex-1 p-2 space-y-1 overflow-y-auto overflow-x-hidden">
                <p className={`px-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>GERAL</p>
                <ul>
                    <NavLink icon={<Home size={20} />} label="Home" pageName="dashboard" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <NavLink icon={<Calendar size={20} />} label="Temporadas" pageName="seasons" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <NavLink icon={<Users size={20} />} label="Times" pageName="teams" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <NavLink icon={<Plus size={20} />} label="Cadastros" pageName="registrations" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <NavLink icon={<Shield size={20} />} label="Chaveamento" pageName="brackets" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <NavLink icon={<FileText size={20} />} label="Partidas" pageName="matches" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <NavLink icon={<Users size={20} />} label="Grupos" pageName="groups" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </ul>
            </nav>
            <div className="p-2 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                <button onClick={toggleDarkMode} className={`flex items-center w-full p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${!isSidebarOpen && 'justify-center'}`}>
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    <span className={`ml-3 font-medium transition-all duration-200 whitespace-nowrap ${isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>Tema</span>
                </button>
                <button onClick={logout} className={`flex items-center w-full p-2 mt-1 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${!isSidebarOpen && 'justify-center'}`}>
                    <LogOut size={20} />
                    <span className={`ml-3 font-medium transition-all duration-200 whitespace-nowrap ${isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>Sair</span>
                </button>
            </div>
        </aside>
    );
};
