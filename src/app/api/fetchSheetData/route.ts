// src/app/api/fetchSheetData/route.ts
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Type definitions for the request and response (optional)
export async function GET() {
    try {
        // Authenticate using the service account
        const auth = new google.auth.JWT(
            process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
            undefined,
            process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.NEXT_PUBLIC_SHEET_ID;
        const range = 'Username!A2:A';

        // Fetch data from Google Sheets
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        return NextResponse.json({ data: response.data.values });
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
