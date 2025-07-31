'use client';

import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { LoginPage } from '@/components/LoginPage';
import { DashboardPage } from '@/components/DashboardPage';
import { SeasonsPage } from '@/components/SeasonsPage';
import { TeamsPage } from '@/components/TeamsPage';
import { RegistrationsPage } from '@/components/RegistrationsPage';
import { BracketsPage } from '@/components/BracketsPage';
import { MatchesPage } from '@/components/MatchesPage';
import { GroupsPage } from '@/components/GroupsPage';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <DashboardPage />;
      case 'seasons': return <SeasonsPage />;
      case 'teams': return <TeamsPage />;
      case 'registrations': return <RegistrationsPage />;
      case 'brackets': return <BracketsPage />;
      case 'matches': return <MatchesPage />;
      case 'groups': return <GroupsPage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        logout={() => setIsLoggedIn(false)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
