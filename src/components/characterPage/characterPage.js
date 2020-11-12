import React from "react";
import { Col, Row } from "reactstrap";
import gotService from "../../services/gotService";

import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class CharacterPage extends React.Component {
  gotService = new gotService();

  state = {
    selectedChar: 45,
  };

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    return (
      <Row>
        <Col md="6">
          <ItemList
            onCharSelected={this.onCharSelected}
            getData={this.gotService.getAllCharacters}
            renderItem={(item) => `${item.name} (${item.gender})`}
          />
        </Col>
        <Col md="6">
          <CharDetails charId={this.state.selectedChar} />
        </Col>
      </Row>
    );
  }
}
