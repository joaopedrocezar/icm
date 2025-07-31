'use client';
import { Input, Button } from '@/components/common';

export const LoginPage = ({ onLogin }) => (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">ICM - Interclass Manager</h1>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <Input label="Email" type="email" defaultValue="admin@icm.com" />
          <Input label="Senha" type="password" defaultValue="password" />
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </div>
    </div>
);
