export const dynamic = 'force-dynamic';  // defaults to force-static


export async function GET(request: Request) {
    await delay(5000);
    return new Response(`Hello ${dynamic}!`)
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));