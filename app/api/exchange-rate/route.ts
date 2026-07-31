import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.EXCHANGE_RATE_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Exchange Rate API key is missing." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`,
      {
        next: {
          revalidate: 3600, // 1 hour cache
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch exchange rates." },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Exchange Rate API Error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}