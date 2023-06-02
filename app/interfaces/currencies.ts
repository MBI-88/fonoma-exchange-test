
interface Curreny {
    symbol:string,
    name:string,
    symbol_native:string,
    decimal_digits:number,
    rounding:number,
    code:string,
    name_plural:string

}

interface Symbol {

}

export interface Currencies {
    data:{
        [currencycode:string]:Curreny
    }
}