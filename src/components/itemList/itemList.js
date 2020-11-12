/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import './itemList.css';
//import gotService from '../../services/gotService';
import Spinner from '../spinner';



export default class ItemList extends Component {
    //gotService = new gotService();

    state = {
        charList:[]
    }

    componentDidMount(){
        const {getData} = this.props;

        //this.gotService.getAllCharacters()
        getData().then((charList)=>{
                this.setState({charList});
            });
    }

    renderItems(arr){
        //return arr.map((item, i) => {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick = {() => this.props.onCharSelected(id)}>
                    {label}  
                </li>
            );
        });
    }

    render() {
        const{charList} = this.state;

        if(!charList){
            return<Spinner/>;
        }
        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
