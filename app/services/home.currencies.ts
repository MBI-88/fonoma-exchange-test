import { Currencies } from "../interfaces/currencies";

export async function GetCurrencies() {
        const response = await fetch("/api/currencies")
        const data:Currencies = await response.json()
        return data
}