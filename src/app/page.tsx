
const cvData = {
  name: "Federico Ferreira",
  role: "Asistente Administrativo / Customer Service",
  summary: "Profesional con formación en Historia y reciente capacitación como Asistente Administrativo. Experiencia en atención al cliente y tareas administrativas, con habilidades en análisis, organización y resolución de problemas. Me destaco por mi eficiencia, atención al detalle y rápida adaptación a nuevos desafíos. Comprometido con el aprendizaje continuo y el trabajo en equipo, busco aportar valor en entornos dinámicos.",
  contact: {
    email: "ferreiramartirena@gmail.com",
    phone: "092 298 225",
    location: "Juan Paullier 1906/003, MVD",
    linkedin: "linkedin.com/in/federicomf"
  },
  experience: [
    {
      role: "Guía Vacacional",
      company: "RCI Latinoamerica, Zonamerica",
      period: "Abr 2025 - Nov 2025",
      description: "Gestión de reservas. Promoción de los lugares de interés y los productos locales. Diseño de itinerarios turísticos para grupos de distintas edades y número.",
    },
    {
      role: "Liveodds Analist Operator",
      company: "SportRadar LATAM, Zonamerica",
      period: "Oct 2020 - Mar 2021",
      description: "Recolectar información deportiva a tiempo real para su uso por parte de terceras empresas. Controlar minuto a minuto los distintos partidos, ajustando los constantes cambios de cuotas de la manera más rápida y eficaz posible. Coordinar con scouts a tiempo real el seguimiento de los partidos.",
    },
    {
      role: "Administrativo de Servicio Técnico",
      company: "Ingeniero Tugentman",
      period: "Oct 2018 - Mar 2019",
      description: "Brindar atención y asesoramiento a los clientes vía telefónica y presencial. Manejo del sistema operativo PSIG. Encargado administrativo del stock de equipos a reparar/reparados - Presupuestación de trabajos a clientes. Brindar ayuda en la coordinación de servicios y de mantenimiento de equipos.",
    },
    {
      role: "Customer Service Agent",
      company: "APAC / EGS / Alorica",
      period: "Sep 2013 - Oct 2018",
      description: "Brindar atención y asesoramiento a los clientes sobre la compra y el servicio post-venta, en habla inglesa. Brindar ayuda en el entrenamiento de los nuevos agentes.",
    }
  ],
  education: [
    {
      degree: "Asistente Administrativo",
      institution: "IDPE",
      period: "Finalizado"
    },
    {
      degree: "C2 proficiency: Cambridge Univ.",
      institution: "ANGLO, Montevideo",
      period: "Completo"
    },
    {
      degree: "Licenciatura: Ciencias Históricas",
      institution: "FHCE, Montevideo",
      period: "Proyecto/Tesis"
    },
    {
      degree: "Mecánica Automotriz",
      institution: "UTU, Montevideo",
      period: "Completado"
    }
  ],
  skills: [
    "Planificación y Organización", "Gestión de Archivos", "MS Office Avanzado", "Trabajo en Equipo", "Atención al Cliente", "Resolución de Problemas"
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-6 py-20 max-w-5xl">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-24 animate-fade-in-up">
        {/* Placeholder for Profile Picture */}
        <div className="w-48 h-48 rounded-3xl border border-slate-700 overflow-hidden relative shadow-2xl shrink-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center animate-pulse-slow rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="text-6xl text-sky-400 font-bold opacity-50">FF</div>
        </div>

        <div className="text-center md:text-left space-y-5 pt-4">
          <h1 className="text-5xl md:text-7xl w-full font-bold tracking-tight text-gradient mb-2">{cvData.name}</h1>
          <p className="text-xl md:text-2xl text-[var(--secondary)] font-medium">{cvData.role}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-slate-300 mt-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><span className="text-sky-400 text-lg">✉</span> {cvData.contact.email}</span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><span className="text-sky-400 text-lg">📱</span> {cvData.contact.phone}</span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><span className="text-sky-400 text-lg">📍</span> {cvData.contact.location}</span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><span className="text-sky-400 text-lg">🔗</span> {cvData.contact.linkedin}</span>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-gradient-to-r from-sky-400 to-transparent"></span> Profile
        </h2>
        <div className="glass-card p-8 md:p-10">
          <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light">{cvData.summary}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <h2 className="text-3xl font-semibold mb-10 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-gradient-to-r from-sky-400 to-transparent"></span> Experience
        </h2>
        <div className="space-y-8 flex flex-col items-center">
          {cvData.experience.map((job, idx) => (
            <div key={idx} className="glass-card p-8 md:p-10 group relative w-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-indigo-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">{job.role}</h3>
                  <p className="text-xl text-indigo-300 font-medium mt-1">{job.company}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-400 font-mono text-sm px-4 py-2 bg-slate-900 rounded-full border border-slate-700 shadow-inner group-hover:border-slate-600 transition-colors">{job.period}</span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg font-light">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two columns for Education & Skills */}
      <div className="grid md:grid-cols-2 gap-10 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-gradient-to-r from-sky-400 to-transparent"></span> Education
          </h2>
          <div className="space-y-6">
            {cvData.education.map((edu, idx) => (
              <div key={idx} className="glass-card p-8 border-t-4 border-t-sky-400 hover:border-t-indigo-400">
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-indigo-300 text-lg mb-3">{edu.institution}</p>
                <p className="text-sm text-slate-400 font-mono inline-block bg-slate-900 px-3 py-1 rounded-md">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-gradient-to-r from-sky-400 to-transparent"></span> Skills
          </h2>
          <div className="glass-card p-8 h-full">
            <div className="flex flex-wrap gap-3">
              {cvData.skills.map((skill, idx) => (
                <span key={idx} className="px-4 py-2.5 bg-slate-900/80 border border-slate-700/50 rounded-xl text-slate-300 text-sm font-medium hover:bg-slate-800 hover:border-sky-400 hover:text-sky-300 hover:shadow-[0_0_10px_var(--accent-glow)] transition-all cursor-crosshair">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-32 pb-10 border-t border-slate-800/80 text-center text-slate-500 text-sm flex flex-col items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 relative -top-5">
          <span className="text-sky-400 font-bold">FF</span>
        </div>
        <p className="hover:text-slate-400 transition-colors">© {new Date().getFullYear()} Federico Ferreira. Coded with Next.js & TailwindCSS.</p>
      </footer>
    </main>
  );
}
