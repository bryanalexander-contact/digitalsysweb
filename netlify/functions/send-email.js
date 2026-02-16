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
            from: 'DigitalSysWeb <onboarding@resend.dev>', // You should use your verified domain here
            to: ['digitalsysweb@gmail.com'],
            subject: `Nuevo mensaje de contacto: ${nombre}`,
            reply_to: 'digitalsysweb@gmail.com',
            html: ` 
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
        });

        if (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error }),
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
