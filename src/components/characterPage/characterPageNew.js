import React from 'react';
import { withRouter } from 'react-router-dom';
import ItemList from '../itemList';
import GotService from '../../services/gotService';

class CharacterPageNew extends React.Component {
    gotService = new GotService();

    onCharSelected = (id) => {
        this.props.history.push(`/vasea/${id}`);
    };

    render() {
        return (
            <ItemList
                onCharSelected={this.onCharSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={(item) => `${item.name} (${item.gender})`} />
        );
    }
}

export default withRouter(CharacterPageNew);
