import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const ip = request.ip;
    // console.log(ip);
    const location = await fetch(`http://ip-api.com/json/${ip}`);
    const locationJson = await location.json();

    return NextResponse.json({
        ip: ip,
        location: locationJson
    });
    
}
