import React, {Component} from 'react'
import {connect} from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {calculateLoan} from '../actions/calculateLoan'
import moment from 'moment'
import {
    Form,
    Label,
    FormGroup,
    Input, 
    Button,
    Col,
    Jumbotron,
    Container
    
}from 'reactstrap'


class Borrow extends Component{

    state = {
        selectedLoan : '',
        today: new Date(),
        amount : '',
        period : ''

    }
    
   handleDate = date => {
       this.setState({today: date})
   }

    handleSubmit = e => {
        e.preventDefault()
        const data = {
            amount : parseInt(this.state.amount),
            year : moment(this.state.today).format('MMMM, YYYY'),
            selected : this.state.selectedLoan,
            period : parseInt(this.state.period)
        }
        this.props.calculateLoan(data)
        
    }
    
    render(){
        const {amount,  period} = this.state
        return(
           <Jumbotron className='mt-2'>
               <Container>
               <Form onSubmit={this.handleSubmit}>
                <div className='d-flex justify-content-between'>
                <FormGroup className='mr-1'>
                    <Label>Loan Amount</Label>
                    <Input type='text' onChange={e => this.setState({amount: e.target.value})} value={amount}/>
                </FormGroup>
                <FormGroup>
                    <label>Select Loan</label>
                   <select className='form-control' onChange={e => this.setState({selectedLoan : e.target.value})}>
                       {this.props.loans.loans.map(loan => (
                           <option value={loan.name} key={loan.rate}>{loan.name}</option>
                       ))}
                   </select>
                </FormGroup>
                <FormGroup>
                    <label>Period</label>
                   <Input type='text' onChange={e => this.setState({period : e.target.value})} value={period}/>
                </FormGroup>
                </div>
                        
                <label>Year</label>
                <FormGroup className='mr-1'>
            
                   <DatePicker
                    selected={this.state.today}
                    onChange={this.handleDate}
                   />
                </FormGroup>
              
                <Button color='success' block>Calculate</Button>
            </Form>
            </Container>
           </Jumbotron>
        )
    }
}

const mapStateToProps = state => ({
    loans: state.loans
})

export default connect(mapStateToProps, {calculateLoan})(Borrow)