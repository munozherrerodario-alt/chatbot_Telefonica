/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Chat from './components/Chat';
import KnowledgeBase from './components/KnowledgeBase';
import { PhoneCall, Globe, Cloud, Shield } from 'lucide-react';

export default function App() {
  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-900 overflow-hidden">
      {/* Sidebar - Knowledge Base */}
      <aside className="w-80 flex-shrink-0 hidden lg:block">
        <KnowledgeBase />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation / Branding */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Globe className="text-white w-5 h-5" />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-blue-900">
                Telefónica <span className="font-light">Empresas</span>
              </h1>
            </div>
            <div className="h-6 w-px bg-slate-200 mx-2" />
            <nav className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Conectividad</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <Cloud className="w-3.5 h-3.5" />
                <span>Cloud</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <Shield className="w-3.5 h-3.5" />
                <span>Seguridad</span>
              </div>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Portal de Agente</span>
              <span className="text-xs text-slate-400">v1.0.4-rag</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">
              JD
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 p-6 relative">
          <div className="max-w-4xl mx-auto h-full">
            <Chat />
          </div>
          
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -z-10 opacity-5 pointer-events-none">
             <Globe className="w-96 h-96 text-blue-900" />
          </div>
        </div>
      </main>
    </div>
  );
}
