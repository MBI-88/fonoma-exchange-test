import { NextResponse } from 'next/server'

const url = process.env.BASE_URL
const apikey = process.env.APIKEY

export async function GET(req: Request) {
    const param = new URLSearchParams(req.url)
    const from  = param.get("from")
    const to = param.get("to")
    const query = `${url}latest?apikey=${apikey}&currencies=${to}&base_currency=${from}`
    const result = await fetch(query)
    const data = await result.json()
    return NextResponse.json(data)


}