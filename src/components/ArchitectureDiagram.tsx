import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, Database, Globe, MapPin, MessageSquare, Server } from 'lucide-react';

const DiagramNode: React.FC<{
  title: string;
  icon: React.ReactNode;
  description: string;
  className?: string;
  delay?: number;
}> = ({ title, icon, description, className, delay = 0 }) => {
  return (
    <div 
      className={`diagram-node p-4 rounded-xl bg-white shadow-md border border-gray-100 flex flex-col items-center text-center w-64 animate-fade-in-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl mb-2 text-gray-700">{icon}</div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

const DiagramConnection: React.FC<{
  direction: 'horizontal' | 'vertical';
  label?: string;
  className?: string;
  delay?: number;
}> = ({ direction, label, className, delay = 0 }) => {
  return (
    <div className={`relative flex items-center justify-center ${direction === 'horizontal' ? 'w-32 h-6' : 'h-20 w-6'} ${className}`}>
      <div className={`absolute ${direction === 'horizontal' ? 'w-full h-[2px]' : 'h-full w-[2px]'} bg-diagram-line diagram-line animate-draw-line`} 
           style={{ animationDelay: `${delay}ms` }}></div>
      
      <div className={`absolute diagram-arrow ${direction === 'horizontal' ? 'right-0' : 'bottom-0'}`}
           style={{ animationDelay: `${delay + 400}ms` }}>
        {direction === 'horizontal' ? (
          <ArrowRight className="text-diagram-line w-5 h-5 animate-pulse-subtle" />
        ) : (
          <ArrowDown className="text-diagram-line w-5 h-5 animate-pulse-subtle" />
        )}
      </div>
      
      {label && (
        <span className="absolute text-xs text-gray-500 px-2 py-1 bg-white/80 rounded-full animate-fade-in" 
              style={{ animationDelay: `${delay + 200}ms` }}>
          {label}
        </span>
      )}
    </div>
  );
};

const ArchitectureDiagram: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="diagram-container relative w-full overflow-hidden py-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto glass-panel rounded-2xl p-8 shadow-sm">
        <div className="mb-10 text-center animate-fade-in">
          <h2 className="text-2xl font-medium mb-2">System Architecture</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Interactive map application architecture with React frontend, CBRE-hosted Python backend, and Microsoft Azure OpenAI service.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <DiagramNode 
              title="React Frontend" 
              icon={<Globe className="text-diagram-react animate-pulse-subtle" />}
              description="Web application with React that displays property markers on Mapbox"
              className="border-l-4 border-l-diagram-frontend"
              delay={300}
            />
            
            <DiagramConnection direction="horizontal" label="WebSockets" delay={600} />
            
            <DiagramNode 
              title="Mapbox Integration" 
              icon={<MapPin className="text-diagram-mapbox animate-pulse-subtle" />}
              description="Visualizes property locations and points of interest on interactive maps"
              className="border-l-4 border-l-diagram-frontend"
              delay={450}
            />
          </div>
          
          <DiagramConnection direction="vertical" label="Coordinates" delay={750} />
          
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <DiagramNode 
              title="Python Backend" 
              icon={<Server className="text-diagram-python animate-pulse-subtle" />}
              description="CBRE-hosted model that processes property data and coordinates"
              className="border-l-4 border-l-diagram-backend"
              delay={600}
            />
            
            <DiagramConnection direction="horizontal" label="API Requests" delay={950} />
            
            <DiagramNode 
              title="Data Processing" 
              icon={<Database className="text-diagram-cbre animate-pulse-subtle" />}
              description="Handles incoming data and prepares it for AI processing"
              className="border-l-4 border-l-diagram-backend"
              delay={750}
            />
          </div>
          
          <DiagramConnection direction="vertical" label="JSON Payload" delay={1100} />
          
          <DiagramNode 
            title="Azure OpenAI Service" 
            icon={<MessageSquare className="text-diagram-azure animate-pulse-subtle" />}
            description="GPT-4 model that analyzes property data and returns points of interest"
            className="border-l-4 border-l-diagram-service"
            delay={900}
          />
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-100 animate-fade-in" style={{ animationDelay: '1200ms' }}>
            <h3 className="font-medium mb-2 text-gray-800">Data Flow</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
              <li>Frontend sends property coordinates via WebSockets to the Python backend</li>
              <li>Backend processes coordinates and forwards requests to Azure OpenAI</li>
              <li>GPT-4 model analyzes data and identifies relevant points of interest</li>
              <li>Results returned as JSON containing property coordinates and points of interest</li>
              <li>Frontend displays markers on Mapbox for properties and points of interest</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
