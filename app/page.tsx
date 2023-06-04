import Form from "./components/form";
import GetCurrencies from "./services/home.currencies";


export default async function Home() {
  const data = await GetCurrencies()
  return (
    <main className="min-h-screen">
      <Form data={data} />
    </main>
  )
}
