"use client"

import { Currencies } from "../interfaces/currencies";
import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import GetExachange from "../services/form.exchange";


interface Props {
    data: Currencies
}

const Form: FC<Props> = ({ data }) => {
    const [state, setState] = useState({ rate: 0, exchanged: 0 })
    const [select, setSelect] = useState({ from: 'USD', to: 'EUR' })
    const [input, setInput] = useState({ currency: 1 })
    const handleSubmit = async (event: MouseEvent<HTMLFormElement>) => {
        event.preventDefault()
        const result = await GetExachange(select.from, select.to)
        const rate = result.data[select.to]
        if (rate == -1) {
            setState(state)
            alert("Request range exceeded")
            return
        }
        const exchanged = input.currency * rate
        setState({ ...state, rate, exchanged })
    }
    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelect(
            { ...select, [event.target.name]: event.target.value }
        )
    }
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const codes = Object.keys(data.data)

    return (
        <section className="lg:m-28 sm:m-12">
            <div className="flex flex-col align-middle px-10 sm:px-96">
                <h1 className=" text-center font-serif mt-4 font-bold text-xl">Exchange Currencies</h1>
                <form className=" pt-10" method="GET" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="base" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Base currency</label>
                        <select value={select.from} name="from" onChange={handleSelect} id="base" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                codes?.map((item, pos) => (
                                    <option value={item} key={pos}>{item} ({data.data[item].symbol_native}) {data.data[item].name_plural}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Currency</label>
                        <select value={select.to} onChange={handleSelect} name="to" id="currency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                codes?.map((item, pos) => (
                                    <option value={item} key={pos}>{item} ({data.data[item].symbol_native}) {data.data[item].name_plural}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="value" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in {select.from}</label>
                        <input value={input.currency} onChange={handleInput} name="currency" type="text" id="value" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="result" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Result</label>
                        <input id="result" value={`${select.to}: ${state.exchanged}  Rate: ${state.rate}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>

        </section>
    )
}

export default Form;