import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Workouts from './Workouts';
import Tips from './Tips';
import './App.css';

export default function App() {
  // Controla qual tela está ativa: 'dashboard', 'workouts' ou 'tips'
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div className="app-container">
      {/* Exibe o Dashboard e passa a função para trocar de tela */}
      {currentView === 'dashboard' && (
        <Dashboard 
          userName="Corredor(a)" 
          onNavigate={(view) => setCurrentView(view)} 
        />
      )}

      {/* Exibe a tela de Treinos e o botão para voltar */}
      {currentView === 'workouts' && (
        <div>
          <button 
            className="dashboard-btn" 
            style={{ maxWidth: '200px', margin: '20px auto 0 auto', display: 'block' }}
            onClick={() => setCurrentView('dashboard')}
          >
            ← Voltar ao Início
          </button>
          <Workouts />
        </div>
      )}

      {/* Exibe a tela de Dicas e o botão para voltar */}
      {currentView === 'tips' && (
        <div>
          <button 
            className="dashboard-btn" 
            style={{ maxWidth: '200px', margin: '20px auto 0 auto', display: 'block' }}
            onClick={() => setCurrentView('dashboard')}
          >
            ← Voltar ao Início
          </button>
          <Tips />
        </div>
      )}
    </div>
  );
}