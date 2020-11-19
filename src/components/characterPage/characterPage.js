import React from 'react';
import ItemList from '../itemList';
import CharDetails, { Field } from '../charDetails';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class CharacterPage extends React.Component {
    gotService = new GotService();

    state = { selectedChar: 45 };

    onCharSelected = (id) => {
        this.setState({ selectedChar: id });
    };

    render() {
        const itemList = (
            <ItemList
                onCharSelected={this.onCharSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={(item) => `${item.name} (${item.gender})`} />
        );

        const charDetails = (
            <CharDetails charId={this.state.selectedChar}>
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
                <Field field='died' label='Died' />
                <Field field='culture' label='Culture' />
            </CharDetails>

        );

        return (<RowBlock left={itemList} right={charDetails} />);
    }
}
