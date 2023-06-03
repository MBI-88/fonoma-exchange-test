import { Exchange } from "../interfaces/exchange";

export default async function GetExachange(from: number | undefined, to: number | undefined, currency: number | undefined) {
    const url = `/api/exchange?from=${from}&to=${to}&currency=${currency}`
    const response = await fetch(url)
    const data: Exchange = await response.json()
    return data
}