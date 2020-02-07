import axios from 'axios'

export const fetchLoans = () => 
    axios.get('http://localhost:5000/api/loans').then(res => console.log(res.data))
