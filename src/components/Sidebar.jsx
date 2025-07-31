'use client';

import { Home, Users, Plus, Shield, Calendar, FileText, LogOut, Moon, Sun, ChevronsLeft } from 'lucide-react';

const NavLink = ({ icon, label, pageName, isSidebarOpen, currentPage, setCurrentPage, toggleSidebar }) => (
    <li>
      <button
        onClick={() => {
            setCurrentPage(pageName);
            // Fecha a sidebar automaticamente no mobile APENAS se estiver aberta
            if (window.innerWidth < 768 && isSidebarOpen) {
                toggleSidebar();
            }
        }}
        className={`flex items-center w-full rounded-md transition-colors ${
          isSidebarOpen ? 'px-4 py-2' : 'p-2 justify-center'
        } ${
          currentPage === pageName
            ? 'bg-red-600 text-white'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        <div className={`flex items-center ${isSidebarOpen ? '' : 'justify-center w-full'}`}>
          {icon}
          <span
            className={`ml-3 font-medium transition-all duration-200 whitespace-nowrap ${
              isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 absolute'
            }`}
          >
            {label}
          </span>
        </div>
      </button>
    </li>
);

export const Sidebar = ({ isSidebarOpen, toggleSidebar, currentPage, setCurrentPage, isDarkMode, toggleDarkMode, logout }) => {
    // Lógica para escolher a logo baseada no tema e estado da sidebar
    const getLogoUrl = () => {
        if (isDarkMode) {
            return isSidebarOpen ? '/ICM-logo-complete-white.png' : '/ICM-logo-white.png';
        } else {
            return isSidebarOpen ? '/ICM-logo-complete-black.png' : '/ICM-logo-black.png';
        }
    };

    return (
        <>
            {/* Overlay para mobile quando sidebar está aberta */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleSidebar}
                />
            )}
            
            {/* Sidebar */}
            <aside className={`
                bg-white dark:bg-gray-900 text-gray-800 dark:text-white 
                flex-shrink-0 flex flex-col transition-all duration-300 z-50
                ${isSidebarOpen 
                    ? 'w-full md:w-64 fixed md:relative inset-0 md:inset-auto' 
                    : 'w-20'
                }
            `}>
                {isSidebarOpen ? (
                    <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                        <img src={getLogoUrl()} alt="ICM Logo" className="h-12 transition-all duration-300" />
                        <button onClick={toggleSidebar} className="text-gray-500 dark:text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <ChevronsLeft className="transition-transform duration-300" />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center pt-4 pb-2 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                        <img src={getLogoUrl()} alt="ICM Logo" className="h-10 transition-all duration-300 mb-2" />
                        <button onClick={toggleSidebar} className="text-gray-500 dark:text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <ChevronsLeft className="transition-transform duration-300 rotate-180" />
                        </button>
                    </div>
                )}
                <nav className="flex-1 p-2 space-y-1 overflow-y-auto overflow-x-hidden">
                    <p className={`px-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>GERAL</p>
                    <ul>
                        <NavLink icon={<Home size={20} />} label="Home" pageName="dashboard" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleSidebar={toggleSidebar} />
                        <NavLink icon={<Calendar size={20} />} label="Temporadas" pageName="seasons" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleSidebar={toggleSidebar} />
                        <NavLink icon={<Users size={20} />} label="Times" pageName="teams" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleSidebar={toggleSidebar} />
                        <NavLink icon={<Plus size={20} />} label="Cadastros" pageName="registrations" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleSidebar={toggleSidebar} />
                        <NavLink icon={<Shield size={20} />} label="Chaveamento" pageName="brackets" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleSidebar={toggleSidebar} />
                        <NavLink icon={<FileText size={20} />} label="Partidas" pageName="matches" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleSidebar={toggleSidebar} />
                        <NavLink icon={<Users size={20} />} label="Grupos" pageName="groups" isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleSidebar={toggleSidebar} />
                    </ul>
                </nav>
                <div className="p-2 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                    <button onClick={toggleDarkMode} className={`flex items-center w-full p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${!isSidebarOpen && 'justify-center'}`}>
                        <div className={`flex items-center ${isSidebarOpen ? '' : 'justify-center w-full'}`}>
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            <span className={`ml-3 font-medium transition-all duration-200 whitespace-nowrap ${isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 absolute'}`}>Tema</span>
                        </div>
                    </button>
                    <button onClick={logout} className={`flex items-center w-full p-2 mt-1 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${!isSidebarOpen && 'justify-center'}`}>
                        <div className={`flex items-center ${isSidebarOpen ? '' : 'justify-center w-full'}`}>
                            <LogOut size={20} />
                            <span className={`ml-3 font-medium transition-all duration-200 whitespace-nowrap ${isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 absolute'}`}>Sair</span>
                        </div>
                    </button>
                </div>
            </aside>
        </>
    );
};
