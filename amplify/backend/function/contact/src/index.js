const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const SES_REGION = "us-east-1";
const SOURCE_EMAIL = "dennis.m.berezin@gmail.com";
const DESTINATION_EMAIL = "dennis.m.berezin@gmail.com";
const DOMAIN = "*";

const sesClient = new SESClient({ region: SES_REGION });

module.exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': DOMAIN,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Successful preflight call' })
    };
  }

  try {
    if (!event.body) {
      throw new Error('Missing request body');
    }

    const { name, email, message } = JSON.parse(event.body);

    const command = new SendEmailCommand({
      Source: SOURCE_EMAIL,
      Destination: {
        ToAddresses: [DESTINATION_EMAIL],
      },
      Message: {
        Subject: {
          Data: `Portfolio Contact Form: Message from ${name}`,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            Charset: "UTF-8",
          },
        },
      },
    });

    await sesClient.send(command);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        message: 'Failed to send email',
        error: error.message // Optional: include error message for debugging
      })
    };
  }
};