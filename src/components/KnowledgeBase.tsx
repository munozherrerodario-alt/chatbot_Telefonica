import React from 'react';
import { Book, ShieldCheck, Clock, UserCheck, Tag } from 'lucide-react';
import { KNOWLEDGE_BASE, CATEGORIES } from '../constants';

export default function KnowledgeBase() {
  return (
    <div className="h-full flex flex-col bg-slate-50 border-r border-slate-200">
      <div className="p-6 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-2 text-blue-700 mb-2">
          <Book className="w-5 h-5" />
          <h2 className="font-bold uppercase tracking-tight">Base de Conocimiento</h2>
        </div>
        <p className="text-xs text-slate-500">
          Catálogo de 12 documentos oficiales para soporte RAG.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {Object.entries(CATEGORIES).map(([catId, catInfo]) => (
          <div key={catId} className="space-y-3">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${catInfo.color}`} />
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {catInfo.name}
              </h3>
            </div>
            
            <div className="space-y-2">
              {KNOWLEDGE_BASE.filter(doc => doc.categoria === catId).map(doc => (
                <div 
                  key={doc.id}
                  className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono text-slate-400">#{doc.id}</span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">
                      v{doc.version}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                      <UserCheck className="w-3 h-3" />
                      <span>{doc.owner}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                      <Clock className="w-3 h-3" />
                      <span>Vigente hasta: {doc.vigencia}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex items-center gap-2 text-green-600 mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase">Política RAG Activa</span>
        </div>
        <p className="text-[9px] text-slate-400 italic">
          "Si no hay evidencia en la KB, responder 'no encontrado' y escalar."
        </p>
      </div>
    </div>
  );
}
