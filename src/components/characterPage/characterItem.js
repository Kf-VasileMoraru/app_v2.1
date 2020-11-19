import React from 'react';
import CharDetails, { Field } from '../charDetails';
import GotService from '../../services/gotService';

export default class CharacterItem extends React.Component {
    gotService = new GotService();

    render() {
        return (
            <CharDetails
                charId={this.props.vasea}
                getData={this.gotService.getAllCharacters}>
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
            </CharDetails>
        );
    }
}
