import React from 'react';
import { Button, Input, Container, Row, Col, ListGroup, ListGroupItem, Spinner } from 'reactstrap';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            isLoading: false,
            currentText: ""
        }
    }

    clearBox = () => {
        document.getElementById("exampletext").value = "";
    }

    clickSubmit = () => {
        let text = document.getElementById("exampletext").value
        console.log(text)
        this.setState({currentText: text});
        setTimeout(this.runAddItem, 2000);
        this.clearBox();
        this.setState({isLoading: true});
    }

    runAddItem = () => {
        this.addItem({text:this.state.currentText});
        this.setState({isLoading: false});
    }

    addItem = (item) => {
        item.id = Math.random().toString();
        let { itemList } = this.state
        itemList.push(item);
        this.setState({ itemList })
    };
    
    removeItem = (itemID) => {
        let { itemList } = this.state
        itemList = itemList.filter((item) => {
            return itemID !== item.id;
        })
        this.setState({ itemList })
    }

    handleRemove = (e) => {
        const id = e.target.value
        this.removeItem(id)
    }

    render() {
        return (
            <Container style={{marginTop: "5vh"}}>
                <Row>
                    <Col sm={6} md = {8}>
                        <Input type="text" name="text" id="exampletext" placeholder="Enter Some Text" />
                    </Col>
                    {this.state.isLoading ?
                        <React.Fragment>
                            <Col sm={3} md = {2}>
                                <Button color="secondary" outline={ false } onClick={this.clickSubmit} disabled>Submit</Button>
                            </Col>
                            <Col sm={3} md = {2}>
                                <Spinner type="grow" color="secondary" />
                            </Col>
                        </React.Fragment> 
                        :
                        <Button style={{marginLeft:"15px"}} color="secondary" outline={ false } onClick={this.clickSubmit}>Submit</Button>
                        }                    
                </Row>
                <Row>
                    <Col sm={6} md={8}>
                        <ListGroup>
                            {this.state.itemList.map((item) => {
                                return (
                                    <ListGroupItem key={item.id}>
                                        {item.text}
                                        <Button style={{marginLeft:"20px"}} color="danger" value={item.id} onClick={this.handleRemove}>remove</Button>
                                    </ListGroupItem>
                                )
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}