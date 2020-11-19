import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage, { CharacterItem, CharacterPageNew } from '../characterPage';
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
            <Router>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col
                                lg={{
                                    size: 6,
                                    offset: 0,
                                }}>
                                {char}
                                <Button onClick={this.toggleRandomChar}>Vasea</Button>
                            </Col>
                        </Row>
                        <Route path='/characters/' component={CharacterPage} />
                        <Route path='/petru/' exact component={CharacterPageNew} />
                        <Route path='/vasea/' exact component={CharacterPage} />
                        <Route path='/vasea/:id' render={({ match }) => {
                            // console.log(id);
                            const { id } = match.params;
                            return (
                                <CharacterItem vasea={id} />);
                        }} />
                        {/* <CharacterPage /> */}

                    </Container>
                </div>
            </Router>
        );
    }
}
