import React, { Component } from 'react'

import { Spinner, Container, Row, Col } from 'react-bootstrap';

import firebase from "../configurations/firebaseconfig";

const db = firebase.firestore();





class addbook extends Component {

    state = {
        bookinfo: []
    }

    componentDidMount() {

        db.collection('Books').get().then(data => {
            data.docs.forEach(doc => {
                this.setState({
                    bookinfo: [...this.state.bookinfo, doc.data()]
                }
                )
                //  console.log(doc.data())
            })

        })

    }

    render() {
        return (
            <div>
                {this.state.bookinfo.length ? (
                    //display data
                    this.state.bookinfo.map(item => {
                        return (
                            <div >
                                <Container>

                                    <Row>

                                        <Col> <h5>{item.bookname}</h5></Col>
                                        <Col> <p id="info">{item.author}</p></Col>
                                        <Col>  <p id="info">{item.price}</p></Col>
                                        <Col>  <p id="info">{item.ISBN}</p></Col>
                                    </Row>


                                </Container>




                            </div>
                        )
                    })
                ) : (
                        //loading

                        <center><br /><Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner></center>
                    )}

            </div>
        )
    }
}
export default addbook;