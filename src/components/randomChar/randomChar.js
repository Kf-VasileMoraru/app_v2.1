/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner';
import View from './view';
import './randomChar.css';

export default class RandomChar extends Component {
    gotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false,
    };

    // constructor() {
    //     super();
    //    // this.updateChar = this.updateChar.bind(this);
    // }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => this.setState({
        char,
        loading: false,
    });

    onError = () => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        // const id = 130000;
        this.gotService.getCharacter(id)
            .then((x) => this.onCharLoaded(x))
            .catch(this.onError);
    };

    render() {
        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}
