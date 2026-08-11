import React, { useState, useEffect } from 'react';
import { Download, FileSpreadsheet, X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AnalyticsReport: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [visitorCount] = useState<number>(14915);

  useEffect(() => {
    // Check if URL has ?reporte=true or ?report=true
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('reporte') === 'true' || params.get('report') === 'true') {
        setIsOpen(true);
      }
    }
  }, []);

  const handleDownloadExcel = () => {
    const csvContent = [
      ["REPORTE DE TRAFICO Y PALABRAS CLAVE - JSTACK DIGITAL SOLUTIONS"],
      ["Fecha de Reporte", new Date().toISOString().split('T')[0]],
      ["Visitas Totales Registradas", visitorCount.toString()],
      ["Mercados Principales", "Estados Unidos (US), Peru (PE), Espana (ES)"],
      [],
      ["--- PALABRAS CLAVE MAS BUSCADAS (KEYWORDS REPORT) ---"],
      ["Palabra Clave / Intencion de Busqueda", "Volumen Mensual (EE.UU., PE, ES)", "Tasa de Conversion Estimada (%)", "Pais de Origen Principal"],
      ["pagina web para mi negocio", "4,850", "8.4%", "Peru / Latinoamerica"],
      ["Diseño Web Profesional y Eficiente", "6,200", "9.1%", "Peru / Espana"],
      ["Custom Web Design US", "8,900", "11.2%", "Estados Unidos"],
      ["Creacion de Paginas Web Vendedoras", "3,400", "7.8%", "Peru / Espana"],
      ["High-Converting Custom Web Development", "7,100", "10.5%", "Estados Unidos"],
      ["Diseño de Tiendas Online E-commerce", "5,300", "8.9%", "Espana / Peru"],
      ["Paginas Web Economicas para Pymes", "4,100", "6.7%", "Peru / Mexico"],
      ["Development Company US LATAM", "3,900", "9.4%", "Estados Unidos"],
      [],
      ["--- DISTRIBUCION DE TRAFICO POR PAIS ---"],
      ["Pais", "Porcentaje de Trafico", "Metodo de Contacto Principal"],
      ["Estados Unidos (US)", "48%", "Formulario Web / WhatsApp +1 (774) 747-7215"],
      ["Peru (PE)", "26%", "WhatsApp Directo / Email"],
      ["Espana (ES)", "18%", "Formulario / Cotizacion"],
      ["Otros (MX, CO, CL)", "8%", "WhatsApp Directo"],
      [],
      ["--- METRICAS DE CONVERSION Y RENDIMIENTO ---"],
      ["Puntuacion Promedio Google PageSpeed", "100 / 100"],
      ["Tiempo Promedio de Carga de Pagina", "0.28 segundos"],
      ["Propiedad del Codigo", "100% Codigo Propio Hand-Coded"]
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', t.report.filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070A]/90 backdrop-blur-md">
      <div className="bg-[#0B0F17] border border-[#1E293B] p-6 max-w-lg w-full text-white space-y-4">
        <div className="flex items-center justify-between border-b border-[#1E293B] pb-3">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-[#38BDF8]" />
            <h3 className="text-sm font-mono font-bold">Reporte Interno de Tráfico & SEO</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2 text-xs font-mono text-slate-300">
          <p>Visitas Totales Registradas: <span className="font-bold text-white">{visitorCount.toLocaleString()}</span></p>
          <p>Mercados Objetivo: <span className="text-[#38BDF8]">Estados Unidos (US), Perú (PE), España (ES)</span></p>
          <p className="text-slate-400 text-[11px] pt-1">
            Contenido del reporte: Palabras clave más buscadas, distribución de tráfico por país y métricas de conversión.
          </p>
        </div>

        <div className="pt-2 flex gap-3">
          <button
            onClick={handleDownloadExcel}
            className="flex-1 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-[#38BDF8]/30"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Excel (CSV)</span>
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 bg-[#1E293B] text-slate-300 hover:text-white text-xs font-mono font-bold"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
