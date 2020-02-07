import React, {Component} from 'react'
import {connect} from 'react-redux'
import {calculateLoan} from '../actions/calculateLoan'
import {getLoanAction} from '../actions/getLoanAction'
import {
    Container
}from 'reactstrap'

class Pay extends Component{

    

    render(){
       
        
       console.log(this.props.loans)

        return(
            <Container>
                <h4>{this.props.loans.duePay}</h4>
                <h3 className='text-primary text-center my-2'>
                    <strong>Monthly Payment: {this.props.loans.monthlyInterest} </strong>
                </h3>
                <div className='d-flex justify-content-between'>
                    <p>
                        <strong>Total :</strong>
                        
                    </p>
                    <p>
                        <strong></strong>
                        <small>interest</small>
                    </p>
                    <p>
                        <strong></strong>
                        <small>interest</small>
                    </p>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    loans : state.loans.tobePaid

})


export default connect(mapStateToProps, {calculateLoan, getLoanAction })(Pay)