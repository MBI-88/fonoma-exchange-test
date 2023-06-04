import { NextResponse } from 'next/server'
import currencies from '../../database/currencies.json'

const url = process.env.BASE_URL 
const apikey = process.env.APIKEY

export async function GET(req: Request) {
    const query = `${url}currencies?apikey=${apikey}&currencies`
    //const result = await fetch(query, { next: { revalidate: 86400 }})
    //const data = await result.json()
    return NextResponse.json(currencies)


}