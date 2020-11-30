import "./App.css";


import { Container, Navbar } from 'react-bootstrap';
import { Nav, Row, Col } from 'react-bootstrap';
import { Jumbotron, Button } from 'react-bootstrap';
import Login from "./components/loginform";
import Addbook from "./components/addbook";

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';





function App() {




  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>ReadingNook</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Books">Books</Nav.Link>
            <Nav.Link href="#addabookform">Add Books</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron id="Home">
        <h1>Hello, Readers!</h1>
        <h3>Welcome to the online book store</h3>
        <p>
          Books are a uniquely portable magic. <br /> So grab a book now and enjoy the magical journey.</p>
        <p>
          <Button variant="primary" href="https://onlinebookclub.org/">Join with others</Button>
        </p>
      </Jumbotron>

      <h2 align="center" id="Books">Available Books</h2><br />

      <br />

      <Addbook />

      <hr />

      <Login />


      <hr />


      <Container id="Contact">
        <Row>
          <Col>
            <Row><h3>Contact Us</h3></Row><br />
            <Row><p>We want to hear your feedback about our services and your complains too.<br />
      Or if you have new ideas for us. Contact us and share your thoughts.</p></Row><br />
            <Row><h5>Telephone :  +94344900756/ +94348877664 </h5></Row>
            <Row><h5>Email     :  readingnook@gmail.com</h5></Row>
          </Col>
          <Col>
            <i>“Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”<br />
– Charles W. Eliot</i><br />
            <br /><i>“A book is a version of the world. If you do not like it, ignore it; or offer your own version in return.”
<br />– Salman Rushdie</i><br />
            <br /><i>“A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors.”
<br />– Charles Baudelaire</i><br /><br /></Col>
        </Row>
      </Container>

      <Container id="footerRN" fluid>
        <Row>
          <Col>

            <Container id="footerRN2">

              <Row>
                <Col align="left">
                  <br />
                  <p id="footermains" >Contact Us</p>
                  <p id="footersubs">Telephone :  +94344900756/+94348877664</p>
                  <p id="footersubs"> E mail : readingnook@gmail.com</p><br /><br />
                  <p id="footerminor">All Rights Reserved</p>
                </Col>

                <Col align="left" >
                  <br />
                  <p id="footermains">Our Services</p>
                  <a href="#Home"><p id="footersubs2">Home</p></a>
                  <a href="#Books"><p id="footersubs2">Books</p></a>
                  <a href="#addabookform"><p id="footersubs2"> Add Books</p></a>
                </Col>


                <Col align="left">
                  <br />
                  <p id="footermains">Follow Us</p>

                  <p id="footersubs"><FacebookIcon fontSize="large" />ReadingNook </p>
                  <p id="footersubs"><InstagramIcon fontSize="large" />ReadingNook </p>
                  <p id="footersubs"><TwitterIcon fontSize="large" />@ReadingNook </p>











                </Col>
              </Row>

            </Container>
          </Col>
        </Row>
      </Container>










    </div>

  );
}

export default App;