import {CALCULATE} from './types'

export function calculateLoan(data){
    return{
        type : CALCULATE,
        payload : data
    }
}