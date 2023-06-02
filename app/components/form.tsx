import { Currencies } from "../interfaces/currencies";
import { FC } from 'react';

interface Props {
    data: Currencies
}

const Form: FC<Props> = ({ data }) => {
    const handleSubmit = () => {
        
    }

    return (
        <section>
            <form className="block" method="GET">
                <div className="mb-6">
                    <label htmlFor="base" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                    <select  id="base" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                    <select id="currency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> 
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="value" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantity</label>
                    <input type="text" id="value" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="USD" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="result" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Result</label>
                    <textarea id="result" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly>
                    </textarea>
                </div>
                <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </section>
    )
}

export default Form;