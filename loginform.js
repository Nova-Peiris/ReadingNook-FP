import React, { Component } from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

import firebase from "../configurations/firebaseconfig";

const db = firebase.firestore();


class loginform extends Component {

    state = {
        username: " ",
        password: " ",
        bookname: " ",
        author: " ",
        price: " ",
        ISBN: " ",

    }


    handleFormData = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleFormPassword= (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleFormBookName = (e) => {
        this.setState({
            bookname: e.target.value
        })
    }

    handleFormAuthor = (e) => {
        this.setState({
            author: e.target.value
        })
    }

    handleFormPrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    handleFormISBN = (e) => {
        this.setState({
            ISBN: e.target.value
        })

    }

    //------------------------------------

    submitData = (e) => {

        if ( this.state.username === "bookadmin"  &&  this.state.password === "pwdadmin") {

          e.preventDefault();
         //console.log(this.state.username);
         //console.log(this.state.password);
         //console.log(this.state.bookname);
         //console.log(this.state.author);
         //console.log(this.state.price);
         //console.log(this.state.ISBN);

        db.collection("Books").add({
            bookname: this.state.bookname,
            author: this.state.author,
            price: this.state.price,
            ISBN: this.state.ISBN,
        });
    }
    else{
        window.alert("Incorrect username or password. Try again.");
    }
    }
     //-----------------------------------

    


    //send this data to backend

    render() {
        return (
            <div>

                <Container id="addabookform" >
                    <br />
                    <Row>
                        <Col>
                            <Container id="userlogincontainer">
                                <Row>
                                    <Col><h3>User Login</h3></Col>

                                </Row>
                                <Row>
                                    <Form onSubmit={this.submitData}>
                                        <Col>


                                            <Form.Group controlid="formBasicText">
                                                <Form.Label>User Name</Form.Label>
                                                <Form.Control id ="basictext"type="text" name="username" placeholder="Enter User Name"
                                                    onChange={this.handleFormData} />

                                            </Form.Group>
                                            <Form.Group controlid="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" name="password" placeholder="Enter Password"
                                                    onChange={this.handleFormPassword} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <h3>Book Information</h3>
                                            <Row>
                                                <Col>
                                                    <Form.Group controlid="bookname">
                                                        <Form.Control type="text" name="bookname" placeholder="Enter Book Name"
                                                            onChange={this.handleFormBookName} />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlid="author">
                                                        <Form.Control type="text" name="authorname" placeholder="Enter Author Name"
                                                            onChange={this.handleFormAuthor} />
                                                    </Form.Group>
                                                </Col>

                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Group controlid="price">
                                                        <Form.Control type="text" name="bookprice" placeholder="Enter Price (USD)"
                                                            onChange={this.handleFormPrice} />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlid="isbn">
                                                        <Form.Control type="text" name="bookisbn" placeholder="Enter ISBN"
                                                            onChange={this.handleFormISBN} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>


                                            <Button variant="primary" type="submit" onClick={this.submitData}>
                                                Submit
                    </Button>

                                     </Col>

                                    </Form>
                                </Row>
                                <br />
                            </Container>
                        </Col>
                        <Col><center><br /><h1>Fill This Form To Add<br />A New Book.</h1><br /><h3 id="notice">For Authorized Users Only. </h3><br /><h5>Use The Given Username And Password To Upload.</h5><br /><br /><h3><i>"Sharing education, sharing a book,<br />That's what changes a world!"</i></h3></center><br /></Col>
                    </Row>
                </Container>

            </div>
        )
    }

}
export default loginform;