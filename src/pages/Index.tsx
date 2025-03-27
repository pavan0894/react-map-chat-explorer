
import React from 'react';
import ArchitectureDiagram from '../components/ArchitectureDiagram';

const Index = () => {
  return (
    <div className="min-h-screen w-full px-4 py-12 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-600 mb-4">
            Architecture Overview
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            React + Mapbox + AI Integration
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A visualization of the system architecture connecting our React frontend with CBRE's Python backend and Microsoft Azure OpenAI.
          </p>
        </div>

        <ArchitectureDiagram />
        
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} • Architecture Visualization
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
