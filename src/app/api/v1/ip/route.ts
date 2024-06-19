import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    
    const ipHeader = request.headers.get('x-real-ip');

    const ip = ipHeader ? ipHeader : request.headers.get('x-forwarded-for');

    console.log(ipHeader);
    console.log(ip);

    const location = await fetch(`http://ip-api.com/json/${ip}`);
    const locationJson = await location.json();

    return NextResponse.json({
        ip: ip,
        location: locationJson
    });
    
}
