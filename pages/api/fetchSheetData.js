// pages/api/fetchSheetData.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  try {
    // Authenticate using the service account
    // const auth = new google.auth.GoogleAuth({
    //   keyFile: path.join(process.cwd(), process.env.GOOGLE_APPLICATION_CREDENTIALS),
    //   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    // });

    const auth = new google.auth.JWT(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      null,
      process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets'],
      null,
    );
    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.NEXT_PUBLIC_SHEET_ID;
    const range = 'Username!A2:A';

    // Fetch data from Google Sheets
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    // console.log(response.data);

    // Return the data as JSON
    res.status(200).json({ data: response.data.values });
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
