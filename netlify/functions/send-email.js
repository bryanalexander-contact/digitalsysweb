import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { nombre, correo, mensaje, gRecaptchaToken } = JSON.parse(event.body);

        // 1. Verify reCAPTCHA
        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${gRecaptchaToken}`,
            { method: 'POST' }
        );
        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'reCAPTCHA verification failed' }),
            };
        }

        // 2. Send Email via Resend
        const { data, error } = await resend.emails.send({
            from: 'DigitalSysWeb <onboarding@resend.dev>',
            to: ['digitalsysweb@gmail.com'],
            subject: `Contacto: ${nombre}`,
            html: ` 
        <h2>Nuevo mensaje</h2>
        <p><strong>De:</strong> ${nombre} (${correo})</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return {
                statusCode: 400,
                body: JSON.stringify({ error: error.message || error }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully', data }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
};
