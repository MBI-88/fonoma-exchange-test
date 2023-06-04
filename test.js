import { render, screen} from '@testing-library/react';
import Form from './app/components/form'
import currencies from './app/database/currencies.json'

// Test

const data = { ...currencies }

describe("render Form component", () => {
    test("Base currency",() => {
        render(<Form data={data} />)
        expect(screen.getByText("Base currency")).toBeInTheDocument()
    })
    test("Currency", () => {
        render(<Form data={data} />)
        expect(screen.getByText("Currency")).toBeInTheDocument()
    })
    test("Button",() => {
        render(<Form data={data} />)
        const element = screen.getByRole('button')
        expect(element).toHaveAttribute('type','submit')
    })
})


describe("Input",() => {
    test("input value",() => {
        render(<Form data={data} />)
        expect(screen.getByPlaceholderText("0")).toHaveAttribute('value',"1")
        
    })

})