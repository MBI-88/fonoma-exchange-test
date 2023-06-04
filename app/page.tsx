import Form from "./components/form";
import currencies from './database/currencies.json'
import { Currencies } from "./interfaces/currencies";

const url = process.env.BASE_URL
const apikey = process.env.APIKEY

async function getData() {
  const query = `${url}currencies?apikey=${apikey}&currencies`
  const res = await fetch(query, { next: { revalidate: 86400 } })
  if (!res.ok) {
    return currencies
  }
  return res.json()
}

export default async function Home() {
  const res = await getData()
  const data:Currencies = {...res}
  return <main className="min-h-screen"><Form data={data} /></main>
  
}
