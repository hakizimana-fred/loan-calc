import React, {Component} from 'react'

import {ListGroupItem} from 'reactstrap'

class Loan extends Component{
    render(){
        const {loan} = this.props
        
        return(
        <>
        <ListGroupItem className='md-6'>
        <span>name : {loan.name}</span>
        <span className='float-right'>Rate: {loan.rate}</span>
        </ListGroupItem>
        </>
        )
    }
}

export default Loan