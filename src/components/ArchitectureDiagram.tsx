
import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, ArrowLeftRight, ArrowUpDown, Database, Globe, MapPin, MessageSquare, Server } from 'lucide-react';

// Logo SVG components
const PythonLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
    <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#5A9FD4"/>
      <stop offset="1" stopColor="#306998"/>
    </linearGradient>
    <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#FFD43B"/>
      <stop offset="1" stopColor="#FFE873"/>
    </linearGradient>
    <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
    <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
    <path opacity=".444" fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
  </svg>
);

const MapboxLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 88 29" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.8 5.9l-6.6 9.7-6.4-9.7c-.4-.6-1.4-.6-1.9-.1-.4.6-.4 1.4.1 1.9L12.5 18l-7.5 10.9c-.4.6-.4 1.4.1 1.9.2.3.6.4.9.4.3 0 .7-.1.9-.4l6.6-9.7 6.4 9.7c.3.4.6.6.9.6.3 0 .7-.1.9-.4.6-.4.6-1.3.1-1.9L14.6 18l7.5-10.9c.4-.6.4-1.4-.1-1.9-.5-.5-1.4-.6-1.9-.1l-.3.4zM39.1 27.6v-8.5c0-2.5-1.3-3.9-3.7-3.9-1.8 0-3.6.9-4.4 2.4v-8.7c0-.6-.6-1.3-1.3-1.3-.6 0-1.3.6-1.3 1.3v18.6c0 .6.6 1.3 1.3 1.3.6 0 1.3-.6 1.3-1.3v-7.3c.6-1.3 2.2-2.1 3.3-2.1 1.5 0 2.2.6 2.2 2.4v7c0 .6.6 1.3 1.3 1.3.6 0 1.3-.6 1.3-1.3v.1zM49.7 15h-2.5v-4.1c0-.6-.6-1.3-1.3-1.3-.6 0-1.3.6-1.3 1.3V15h-1.9c-.6 0-1.3.6-1.3 1.3 0 .6.6 1.3 1.3 1.3h1.9v9.9c0 .6.6 1.3 1.3 1.3.6 0 1.3-.6 1.3-1.3v-9.9h2.5c.6 0 1.3-.6 1.3-1.3 0-.7-.6-1.3-1.3-1.3zM52.1 10.4c-.9 0-1.6.6-1.6 1.6 0 .9.6 1.6 1.6 1.6.9 0 1.6-.6 1.6-1.6-.1-.9-.7-1.6-1.6-1.6zm-1.3 17.2v-11c0-.6.6-1.3 1.3-1.3.6 0 1.3.6 1.3 1.3v11c0 .6-.6 1.3-1.3 1.3-.7 0-1.3-.7-1.3-1.3zM58.4 10.4c-.6 0-1.3.6-1.3 1.3v15.9c0 .6.6 1.3 1.3 1.3.6 0 1.3-.6 1.3-1.3V11.6c0-.6-.6-1.2-1.3-1.2zM67.9 15h-3.4v-3.3c0-.4-.3-.6-.6-.6s-.6.3-.6.6V15h-1.9c-.6 0-1.3.6-1.3 1.3 0 .6.6 1.3 1.3 1.3h1.9v10c0 .6.6 1.3 1.3 1.3.6 0 1.3-.6 1.3-1.3v-10H67c.6 0 1.3-.6 1.3-1.3-.1-.7-.7-1.3-1.3-1.3h-.1zM81.5 15.8c-1.9-1-3.9-1.1-5.8-.3-1.8.8-3.1 2.6-3.3 4.5-.3 2.9 1.3 5.3 3.9 6.1 1.1.3 2.8.4 3.6.1.6-.1.8-.1 1.5-.4.1-.1.4-.1.4-.3v-4.4c0-.6-.6-1.3-1.3-1.3h-3.1c-.6 0-1.3.6-1.3 1.3 0 .6.6 1.3 1.3 1.3h1.8v2.5c-1.9.6-4.3-.6-4.7-2.9-.4-2.1.9-4.1 2.9-4.5 1.5-.3 3.3.4 4 1.9.3.4.9.6 1.3.4.7-.3.9-1.1.6-1.7-.1-.4-.4-.8-.7-1v-1.3h-.1z" fill="#4264FB" />
  </svg>
);

const AzureOpenAILogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 96 96" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M48 0A48 48 0 0 0 0 48a48 48 0 0 0 48 48 48 48 0 0 0 48-48A48 48 0 0 0 48 0zm0 86.4A38.4 38.4 0 0 1 9.6 48 38.4 38.4 0 0 1 48 9.6 38.4 38.4 0 0 1 86.4 48 38.4 38.4 0 0 1 48 86.4z" fill="#0078D4"/>
    <path d="M46.6 65.7c4.8 3.5 11.5 2.4 15-2.4 3.5-4.8 2.4-11.5-2.4-15-1-.7-2.2-1.2-3.3-1.5l13.9-10.2c1-.7 1.2-2.1.5-3.1-.7-1-2.1-1.2-3.1-.5l-17.2 12.7c-1 .7-1.2 2.1-.5 3.1.7 1 2.1 1.2 3.1.5l4.8-3.5c3.8-2.8 9.1-2 11.9 1.8 2.8 3.8 2 9.1-1.8 11.9-3.8 2.8-9.1 2-11.9-1.8-.7-1-2.1-1.2-3.1-.5-1 .7-1.2 2.1-.5 3.1.9 1 1.8 1.8 2.9 2.4l-13.9 10.2c-1 .7-1.2 2.1-.5 3.1.7 1 2.1 1.2 3.1.5l17.2-12.7c-.6-.8-1.2-1.7-1.7-2.6-2.4-3.1-3.1-7-2.4-10.6l-10 7.3c-1 .7-1.2 2.1-.5 3.1.7 1 2.1 1.2 3.1.5l1.3-1z" fill="#0078D4"/>
  </svg>
);

const DiagramNode: React.FC<{
  title: string;
  icon: React.ReactNode;
  logo?: React.ReactNode;
  description: string;
  className?: string;
  delay?: number;
}> = ({ title, icon, logo, description, className, delay = 0 }) => {
  return (
    <div 
      className={`diagram-node p-4 rounded-xl bg-white shadow-md border border-gray-100 flex flex-col items-center text-center w-64 animate-fade-in-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center mb-2">
        <div className="text-3xl text-gray-700 mr-2">{icon}</div>
        {logo && <div className="w-8 h-8">{logo}</div>}
      </div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

const DiagramConnection: React.FC<{
  direction: 'horizontal' | 'vertical';
  bidirectional?: boolean;
  label?: string;
  className?: string;
  delay?: number;
}> = ({ direction, bidirectional = true, label, className, delay = 0 }) => {
  return (
    <div className={`relative flex items-center justify-center ${direction === 'horizontal' ? 'w-32 h-6' : 'h-20 w-6'} ${className}`}>
      <div className={`absolute ${direction === 'horizontal' ? 'w-full h-[2px]' : 'h-full w-[2px]'} bg-diagram-line diagram-line animate-draw-line`} 
           style={{ animationDelay: `${delay}ms` }}></div>
      
      <div className={`absolute diagram-arrow ${direction === 'horizontal' ? 'right-0' : 'bottom-0'}`}
           style={{ animationDelay: `${delay + 400}ms` }}>
        {bidirectional ? (
          direction === 'horizontal' ? (
            <ArrowLeftRight className="text-diagram-line w-5 h-5 animate-pulse-subtle" />
          ) : (
            <ArrowUpDown className="text-diagram-line w-5 h-5 animate-pulse-subtle" />
          )
        ) : (
          direction === 'horizontal' ? (
            <ArrowRight className="text-diagram-line w-5 h-5 animate-pulse-subtle" />
          ) : (
            <ArrowDown className="text-diagram-line w-5 h-5 animate-pulse-subtle" />
          )
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
              logo={<MapboxLogo className="text-diagram-mapbox" />}
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
              logo={<PythonLogo className="w-7 h-7" />}
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
            logo={<AzureOpenAILogo className="w-7 h-7" />}
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
