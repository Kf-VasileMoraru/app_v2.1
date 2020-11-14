import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
// import gotService from "../../services/gotService"

export default class App extends React.Component {
// gotService = new gotService()

    constructor(props) {
        super(props);
        this.state = { showRandomChar: true };
    }

    toggleRandomChar = () => {
        this.setState((state) => ({ showRandomChar: !state.showRandomChar }));
    };

    render() {
        const char = this.state.showRandomChar ? <RandomChar /> : null;
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col
                            lg={{
                                size: 6,
                                offset: 0,
                            }}
                        >
                            {char}
                            <Button onClick={this.toggleRandomChar}>Vasea</Button>
                        </Col>
                    </Row>
                    <CharacterPage />
                    {/* <Row>
                        <Col md="6">
                            <ItemList
                                onCharSelected = {this.onCharSelected}
                                getData = {this.gotService.getAllCharacters} />
                        </Col>
                        <Col md="6">
                            <CharDetails charId={this.state.selectedChar} />
                        </Col>
                     </Row>
                    <Row>
                        <Col md="6">
                            <ItemList
                                onCharSelected = {this.onCharSelected}
                                getData = {this.gotService.getAllCharacters} />
                        </Col>
                        <Col md="6">
                            <CharDetails charId={this.state.selectedChar} />
                        </Col>
                    </Row> */}
                </Container>
            </>
        );
    }
}
