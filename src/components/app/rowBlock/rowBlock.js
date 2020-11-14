import React from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

const RowBlock = ({ left, right }) => (
    <Row>
        <Col md="6">
            {left}
        </Col>
        <Col md="6">
            {right}
        </Col>
    </Row>
);

RowBlock.propTypes = {
    left: PropTypes.any,
    right: PropTypes.node.isRequired,
};
export default RowBlock;
