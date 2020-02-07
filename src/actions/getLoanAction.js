import {GET_LOANS} from './types'
import axios from 'axios'






export function getLoanAction(){
    return function(dispatch){
        axios.get('http://localhost:5000/api/loans')
            .then(res => dispatch({
               type: GET_LOANS,
                payload : res.data
            }))
    }
}


