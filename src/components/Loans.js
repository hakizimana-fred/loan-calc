import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getLoanAction, calculateLoan} from '../actions/getLoanAction'
import Loan from './Loan'
import Borrow from './Borrow'
import Pay from './Pay'
import {
    Container,
    Row,
    Col, 
    Jumbotron,
    ListGroup,
    ListGroupItem
} from 'reactstrap'


class Loans extends Component{
    
    componentDidMount(){
        this.props.getLoanAction()
    }
    
    

    render(){
      

        return(
           <Container className='mt-2'>
               <Jumbotron>
                   <h2 className='text-center text-primary'>Fast and Light loan for you</h2>
               </Jumbotron>
               
               <Row>
                   <Col className='col-md-6 mx-auto'>
                    <h4 className='text-center'>Available Loans</h4>
                   <ListGroup>
                      {this.props.loans.loans.map(loan => (
                          <Loan key={loan.rate} loan={loan} />
                      ))}
                    </ListGroup>
                   </Col>
                  
               </Row>
               <Borrow />
               <hr />
                      <h5>Interest:</h5>
               <Pay />
           </Container>
        )
    }
}

const mapStateToProps = state => ({
    loans: state.loans
  
})

export default connect(mapStateToProps, {getLoanAction})(Loans)