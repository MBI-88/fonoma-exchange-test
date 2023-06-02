import { NextResponse } from 'next/server'

const url = process.env.BASE_URL
const apikey = process.env.APIKEY

export async function GET(req: Request) {
    const from  = "USD"
    const to = "CAD"
    const query = `${url}latest?apikey=${apikey}&currencies=${to}&base_currency=${from}`
    const result = await fetch(query)
    const data = await result.json()
    return NextResponse.json(data)


}