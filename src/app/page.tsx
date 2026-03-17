"use client";

import { useState } from "react";

const cvData = {
  en: {
    name: "Federico Ferreira",
    role: "Administrative Assistant / Customer Service",
    summary: "History graduate with recent training as an Administrative Assistant. Experienced in customer service and administrative tasks, bringing strong analytical, organizational, and problem-solving skills. Known for efficiency, attention to detail, and quick adaptation to new challenges. Committed to continuous learning and teamwork, aiming to add value in dynamic environments.",
    contact: {
      email: "ferreiramartirena@gmail.com",
      emailLink: "mailto:ferreiramartirena@gmail.com",
      phone: "092 298 225",
      phoneLink: "tel:+59892298225",
      location: "Juan Paullier 1906, CP 11800 Departamento de Montevideo, Uruguay",
      locationLink: "https://maps.app.goo.gl/FFhAwM4pm3jXs9Mo7",
      linkedin: "linkedin.com/in/federicomf",
      linkedinLink: "https://linkedin.com/in/federicomf"
    },
    sections: {
      profile: "Profile",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      codedWith: "All rights reserved by Federico Martirena Ferreira and Bitera Digital."
    },
    experience: [
      {
        role: "Vacation Guide",
        company: "RCI Latinoamerica, Zonamerica",
        period: "Apr 2025 - Nov 2025",
        description: "Managed reservations. Promoted local landmarks and regional products. Designed customized tourist itineraries for groups of various sizes and ages.",
      },
      {
        role: "Liveodds Analyst Operator",
        company: "SportRadar LATAM, Zonamerica",
        period: "Oct 2020 - Mar 2021",
        description: "Collected real-time sports data for third-party companies. Monitored multiple matches concurrently, adjusting dynamic odds changes rapidly and effectively. Coordinated real-time match tracking with English-speaking scouts.",
      },
      {
        role: "Technical Service Administrator",
        company: "Ingeniero Tugentman",
        period: "Oct 2018 - Mar 2019",
        description: "Provided in-person and telephone customer service and consultation. Managed the PSIG operating system. Handled administrative stock control of repaired and pending equipment. Drafted client budgets and coordinated maintenance services.",
      },
      {
        role: "Customer Service Agent",
        company: "APAC / EGS / Alorica",
        period: "Sep 2013 - Oct 2018",
        description: "Provided post-sales customer support and purchasing consultation entirely in English. Assisted in the training and onboarding process for new agents.",
      }
    ],
    education: [
      {
        degree: "Administrative Assistant",
        institution: "IDPE",
        period: "Completed"
      },
      {
        degree: "C2 Proficiency: Cambridge Univ.",
        institution: "ANGLO, Montevideo",
        period: "Completed"
      },
      {
        degree: "Bachelor's Degree: Historical Sciences",
        institution: "FHCE, Montevideo",
        period: "Thesis Project"
      },
      {
        degree: "Automotive Mechanics",
        institution: "UTU, Montevideo",
      }
    ],
    skills: [
      "Rigorous Organization", "Effective Communication", "Adaptability & Flexibility", "Emotional Intelligence", "Problem Solving & Critical Thinking", "Teamwork", "Leadership", "Time Management", "Resilience", "Discipline", "Spirit of Sacrifice", "Android Mobile Devices", "Windows Computers", "Document Drafting & Writing"
    ]
  },
  es: {
    name: "Federico Ferreira",
    role: "Asistente Administrativo / Atención al cliente",
    summary: "Profesional con formación en Historia y reciente capacitación como Asistente Administrativo. Experiencia en atención al cliente y tareas administrativas, con habilidades en análisis, organización y resolución de problemas. Me destaco por mi eficiencia, atención al detalle y rápida adaptación a nuevos desafíos. Comprometido con el aprendizaje continuo y el trabajo en equipo, busco aportar valor en entornos dinámicos.",
    contact: {
      email: "ferreiramartirena@gmail.com",
      emailLink: "mailto:ferreiramartirena@gmail.com",
      phone: "092 298 225",
      phoneLink: "https://wa.me/59892298225",
      location: "Juan Paullier 1906, CP 11800 Departamento de Montevideo, Uruguay",
      locationLink: "https://maps.app.goo.gl/FFhAwM4pm3jXs9Mo7",
      linkedin: "linkedin.com/in/federicomf",
      linkedinLink: "https://linkedin.com/in/federicomf"
    },
    sections: {
      profile: "Perfil Profesional",
      experience: "Experiencia",
      education: "Educación",
      skills: "Competencias",
      codedWith: "Todos los derechos reservados para Federico Martirena Ferreira y Bitera Digital."
    },
    experience: [
      {
        role: "Guía Vacacional",
        company: "RCI Latinoamerica, Zonamerica",
        period: "Abr 2025 - Nov 2025",
        description: "Gestión de reservas. Promoción de los lugares de interés y los productos locales. Diseño de itinerarios turísticos para grupos de distintas edades y número.",
      },
      {
        role: "Operador Analista de Cuotas en Vivo",
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
        role: "Agente de Atención al Cliente",
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
      }
    ],
    skills: [
      "Organización Rigurosa", "Comunicación Efectiva", "Adaptabilidad/Flexibilidad", "Inteligencia Emocional", "Resolución de Problemas y Pensamiento Crítico", "Trabajo en Equipo", "Liderazgo", "Gestión del Tiempo", "Resiliencia", "Disciplina", "Espíritu de Sacrificio", "Uso de dispositivos móviles Android", "Uso de computadoras con Windows", "Redacción de Documentos"
    ]
  }
};

import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const data = cvData[lang];

  // Scroll animations for the rolling jeep
  const { scrollYProgress } = useScroll();
  const xJeep = useTransform(scrollYProgress, [0, 1], ["85vw", "-45vw"]);

  return (
    <main className="min-h-screen relative overflow-hidden bg-white text-slate-800 font-sans">
      
      {/* Rolling Jeep Blueprint (Scroll parallax) */}
      <motion.div 
        className="fixed -bottom-10 z-0 pointer-events-none opacity-20"
        style={{ 
          backgroundImage: "url('/minimalist_jeep_blueprint.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          width: "800px",
          height: "500px",
          x: xJeep,
        }}
      />

      <div className="container mx-auto px-6 py-12 max-w-5xl relative z-10">
        {/* Language Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-end mb-16"
        >
          <div className="flex bg-white/70 border border-slate-200 rounded-sm p-1 shadow-sm backdrop-blur-md">
            <button
              onClick={() => setLang("en")}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${lang === "en" ? "bg-[#0f3c5f] text-white" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${lang === "es" ? "bg-[#0f3c5f] text-white" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
            >
              ES
            </button>
          </div>
        </motion.div>

        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-32"
        >
          <div className="w-48 h-48 border-4 border-[#0f3c5f] relative shadow-lg shrink-0 bg-slate-50 flex items-center justify-center transition-transform hover:-translate-y-2 duration-300">
            {/* Absolute minimalist emblem */}
            <div className="absolute inset-0 border-[1px] border-[#0f3c5f]/20 m-2" />
            <div className="text-7xl text-[#0f3c5f] font-black tracking-tighter">FF</div>
          </div>

          <div className="text-center md:text-left space-y-4 pt-2">
            <h1 className="text-6xl md:text-8xl w-full font-black tracking-tight text-slate-900 uppercase">
              {data.name.split(" ")[0]} <br/>
              <span className="text-[#0f3c5f]">{data.name.split(" ")[1]}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#47553f] font-semibold tracking-widest uppercase border-l-4 border-[#0f3c5f] pl-4 inline-block">{data.role}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold tracking-widest text-[#0f3c5f] mt-8">
              <a href={data.contact.emailLink} className="flex items-center gap-2 hover:bg-[#0f172a] hover:text-white px-4 py-2 border border-[#0f3c5f] transition-colors">
                EMAIL
              </a>
              <a href={data.contact.phoneLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-[#0f172a] hover:text-white px-4 py-2 border border-[#0f3c5f] transition-colors">
                PHONE
              </a>
              <a href={data.contact.locationLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-[#0f172a] hover:text-white px-4 py-2 border border-[#0f3c5f] transition-colors">
                HQ
              </a>
              <a href={data.contact.linkedinLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-[#0f172a] hover:text-white px-4 py-2 border border-[#0f3c5f] transition-colors">
                LINKEDIN
              </a>
            </div>
          </div>
        </motion.header>

        {/* Summary Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <span className="text-3xl font-black text-[#0f3c5f] tracking-tighter">01.</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-800">{data.sections.profile}</h2>
            <div className="flex-grow h-[1px] bg-slate-200"></div>
          </div>
          <div className="glass-card p-10 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#0f3c5f]/5 -translate-y-1/2 translate-x-1/2 rotate-45 transform group-hover:bg-[#0f3c5f]/10 transition-colors" />
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-medium">{data.summary}</p>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-12">
            <span className="text-3xl font-black text-[#0f3c5f] tracking-tighter">02.</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-800">{data.sections.experience}</h2>
            <div className="flex-grow h-[1px] bg-slate-200"></div>
          </div>
          
          <div className="space-y-6 flex flex-col items-center">
            {data.experience.map((job, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 md:p-10 group relative w-full hover:border-[#0f3c5f]/30"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#0f3c5f] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#0f3c5f] transition-colors">{job.role}</h3>
                    <p className="text-lg text-[#47553f] font-bold mt-1 uppercase tracking-wider">{job.company}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-slate-500 font-bold text-xs tracking-widest px-4 py-2 bg-slate-50 border border-slate-200 rounded-sm">{job.period}</span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Two columns for Education & Skills */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="text-2xl font-black text-[#0f3c5f] tracking-tighter">03.</span>
              <h2 className="text-xl font-bold uppercase tracking-widest text-slate-800">{data.sections.education}</h2>
            </div>
            <div className="space-y-4">
              {data.education.map((edu, idx) => (
                <div key={idx} className="glass-card p-6 border-l-4 border-l-[#47553f] hover:border-l-[#0f3c5f]">
                  <h3 className="text-lg font-black text-slate-900 mb-1">{edu.degree}</h3>
                  <p className="text-[#0f3c5f] text-sm font-bold uppercase tracking-wider mb-3">{edu.institution}</p>
                  <p className="text-xs text-slate-500 font-bold tracking-widest inline-block bg-slate-100 px-3 py-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="text-2xl font-black text-[#0f3c5f] tracking-tighter">04.</span>
              <h2 className="text-xl font-bold uppercase tracking-widest text-slate-800">{data.sections.skills}</h2>
            </div>
            <div className="glass-card p-8 h-full bg-slate-50/50">
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white border border-slate-200 text-[#0f3c5f] text-xs font-bold tracking-widest uppercase hover:bg-[#0f172a] hover:border-[#0f172a] hover:text-white transition-all cursor-crosshair">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-10 border-t border-slate-200 text-center text-slate-400 text-xs font-bold tracking-widest uppercase flex flex-col items-center gap-6"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-[#0f3c5f] relative -top-16 shadow-sm">
            <span className="text-[#0f3c5f] font-black">FF</span>
          </div>
          <p className="hover:text-slate-800 transition-colors cursor-default">
            © {new Date().getFullYear()} {data.sections.codedWith}
          </p>
        </motion.footer>
      </div>
    </main>
  );
}
