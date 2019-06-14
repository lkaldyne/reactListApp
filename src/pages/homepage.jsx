import React from 'react';
import { Button, Input, Container, Row, Col } from 'reactstrap';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'submit'
        }
    }

    toggleButton = () => {
        this.setState({ buttonText: 'laith' })
    }

    render() {
        return (
            <Container style={{marginTop: "5vh"}}>
                <Row>
                    <Col sm={6} md = {8}>
                        <Input type="text" name="text" id="exampletext" placeholder="Enter Some Text" />
                    </Col>
                    <Col sm={6} md = {4}>
                        <Button color="secondary" outline={ false } onClick={this.toggleButton}>{this.state.buttonText}</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}