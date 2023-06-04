import { Exchange } from "../interfaces/exchange";

export default async function GetExachange(from: string, to: string) {
    const url = `/api/exchange?from=${from}&to=${to}`
    const response = await fetch(url)
    const data:Exchange = await response.json()
    return data
}