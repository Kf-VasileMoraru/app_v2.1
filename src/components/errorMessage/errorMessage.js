/* eslint-disable no-undef */
import React from 'react';
import './errorMessage.css';

const ErrorMessage = () => (
    <>
        <img src={`${process.env.PUBLIC_URL}img/got.jpeg`}></img>
        <span>Something goes wrong !!</span>;
    </>
);

export default ErrorMessage;
