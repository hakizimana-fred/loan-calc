import React, {Component} from 'react'
import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem
}from 'reactstrap'

class LoanSelect extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col className='md-6'>
                        <ListGroup>
                            <ListGroupItem>
                                Loan 1
                            </ListGroupItem>
                            <ListGroupItem>
                                Loan 2
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}