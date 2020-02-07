import {GET_LOANS, CALCULATE} from '../actions/types'
import moment from 'moment'

const initialState = {
    loans : [],
    tobePaid : {
      payOffDate: new Date(),
      interest : 2000,
      totalAmount : 10000,
      monthlyInterest : '',
      duePay: ''
    }
}

const loans = (state = initialState, action) => {
    switch(action.type){
        case GET_LOANS:
            return{
                ...state,
                loans : action.payload
            }
        case CALCULATE:
            const {amount, year, selected, period} = action.payload
            const temp = [...state.loans]
            const findSelected = state.loans.find(loan => loan.name === selected)
            const index = temp.indexOf(findSelected)
            const indexed = temp[index] 
            const rate = indexed.rate
          
            const monthlyRate = rate/100
            
            const annualRate = monthlyRate/12
            let monthlyInterest = amount * annualRate
            monthlyInterest = monthlyInterest.toFixed(2)

            const totalPay = parseInt(amount)
            const finalPayment = totalPay + monthlyInterest
            

           
            let due = moment(year).format('YYYY')
             due = parseInt(due)
             const duePay = due + period
             



           return {
               ...state,
              monthlyInterest: monthlyInterest,
              totalAmount : finalPayment,
              duePay
           }

        default:
            return state
    }
}

export default loans