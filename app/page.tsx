import Form from "./components/form";
import { Currencies } from "./interfaces/currencies";
import currencies from './database/currencies.json'
import { GetCurrencies } from "./services/home.currencies";


export default async function Home() {
  const debug = true
  let data:Currencies
  if (debug) {
    data = {...currencies}
  }else {
    data = await GetCurrencies()
  }

  return (
    <main className="min-h-screen">
      <Form data={data}/>
    </main>
  )
}
