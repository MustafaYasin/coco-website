import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { name, email, timestamp } = await request.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json({ message: 'Name and email are required' }, { status: 400 });
    }

    // Create customers directory if it doesn't exist
    const customersDir = path.join(process.cwd(), 'customers');
    if (!fs.existsSync(customersDir)) {
      fs.mkdirSync(customersDir, { recursive: true });
    }

    // Path to CSV file
    const csvPath = path.join(customersDir, 'online-order.csv');

    // Check if file exists, if not create with headers
    if (!fs.existsSync(csvPath)) {
      const headers = 'Name,Email,Timestamp\n';
      fs.writeFileSync(csvPath, headers);
    }

    // Prepare CSV row (escape commas and quotes)
    const escapedName = `"${name.replace(/"/g, '""')}"`;
    const escapedEmail = `"${email.replace(/"/g, '""')}"`;
    const csvRow = `${escapedName},${escapedEmail},${timestamp}\n`;

    // Append to CSV file
    fs.appendFileSync(csvPath, csvRow);

    console.log('New online order interest saved:', { name, email, timestamp });

    return NextResponse.json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving online order data:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}