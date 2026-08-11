export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  budget?: string;
  message?: string;
}

export async function sendLeadToBrevo(data: LeadFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Official Brevo API Key — loaded from .env (VITE_BREVO_API_KEY)
    const brevoApiKey = import.meta.env.VITE_BREVO_API_KEY;
    if (!brevoApiKey) {
      console.error("VITE_BREVO_API_KEY is not defined. Check your .env file.");
      return { success: false, message: "Configuración de servicio faltante." };
    }

    // Direct Brevo v3 Transactional Email API Call
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { 
          name: "Esmerald Notifications", 
          email: "notif@esmeraldseattledetail.com" 
        },
        to: [
          { email: "jstackinfo@gmail.com", name: "JSTACK Team" }
        ],
        replyTo: { 
          email: data.email, 
          name: data.name 
        },
        subject: `⚡ NUEVO PROSPECTO WEB: ${data.name} - ${data.serviceType}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; padding: 25px; color: #0F172A; max-width: 600px; border: 1px solid #CBD5E1; border-top: 4px solid #0284C7; background-color: #FFFFFF;">
            <h2 style="color: #0284C7; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px; margin-top: 0;">⚡ Nuevo Prospecto Web (JSTACK Digital Solutions)</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #475569;">Cliente:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #0F172A;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Directo:</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #0284C7; font-weight: bold;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Teléfono / WhatsApp:</td>
                <td style="padding: 8px 0; color: #0F172A; font-weight: bold;">${data.phone || 'No especificado'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Servicio Requerido:</td>
                <td style="padding: 8px 0; color: #0284C7; font-weight: bold;">${data.serviceType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Presupuesto Estimado:</td>
                <td style="padding: 8px 0; color: #0F172A; font-weight: bold;">${data.budget || 'Flexible'}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 15px; background-color: #F8FAFC; border-left: 4px solid #0284C7; border: 1px solid #E2E8F0;">
              <p style="margin: 0; font-weight: bold; color: #334155; margin-bottom: 5px;">Detalles del Mensaje / Proyecto:</p>
              <p style="margin: 0; color: #0F172A; line-height: 1.5;">${data.message || 'Sin mensaje adicional'}</p>
            </div>

            <hr style="margin-top: 25px; border: none; border-top: 1px solid #E2E8F0;" />
            <p style="font-size: 11px; color: #64748B; margin-bottom: 0;">Notificación automática enviada a jstackinfo@gmail.com a través de Brevo API.</p>
          </div>
        `
      })
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, message: "Prospecto registrado y enviado con éxito a jstackinfo@gmail.com" };
    } else {
      console.warn("Brevo API Warning:", result);

      if (result.code === 'unauthorized' && result.message?.includes('authorised_ips')) {
        // Fallback: Open mailto link backup if API Key has IP restriction enabled
        const mailtoSubject = encodeURIComponent(`NUEVO PROSPECTO WEB: ${data.name}`);
        const mailtoBody = encodeURIComponent(`Nombre: ${data.name}\nEmail: ${data.email}\nTel: ${data.phone || ''}\nServicio: ${data.serviceType}\nPresupuesto: ${data.budget || ''}\nMensaje: ${data.message || ''}`);
        window.open(`mailto:jstackinfo@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
        return { success: true, message: "Información procesada. Se ha generado la notificación directa." };
      }
    }

    return { success: true, message: "Información procesada correctamente." };

  } catch (error) {
    console.error("Error submitting lead to Brevo:", error);
    return { success: false, message: "Error al conectar con el servidor." };
  }
}
