import { Currencies } from "../interfaces/currencies";
import currencies from '../database/currencies.json'

const url = process.env.BASE_URL
const apikey = process.env.APIKEY

export default async function GetCurrencies() {
        const query = `${url}currencies?apikey=${apikey}&currencies`
        const res = await fetch(query, { next: { revalidate: 86400 } })
        if (!res.ok) {
                return currencies
        }
        return res.json() 
}