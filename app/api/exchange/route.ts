import { NextResponse } from 'next/server'

const url = process.env.BASE_URL
const apikey = process.env.APIKEY

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url)
    const from  = searchParams.get("from")
    const to = searchParams.get("to")
    const query = `${url}latest?apikey=${apikey}&currencies=${to}&base_currency=${from}`
    const result = await fetch(query, { next: { revalidate: 18000 } })
    if (!result.ok) {
        const error = {
            "data": {
                "CAD": -1
            }
        }
        return NextResponse.json(error)
    }
    const data = await result.json()
    return NextResponse.json(data)


}