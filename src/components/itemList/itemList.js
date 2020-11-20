/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './itemList.css';
// import gotService from '../../services/gotService';
import Spinner from '../spinner';

export default function ItemList({ getData, onCharSelected, renderItem }) {
    // gotService = new gotService();
    const [charList, updataCharList] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                updataCharList(data);
            });
    }, []);

    function renderItems(arr) {
        return arr.map((item, i) => {
            // const { id } = item;
            const label = renderItem(item);
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => onCharSelected(i + 41)}>
                    {label}
                </li>
            );
        });
    }

    if (charList.length === 0) {
        return <Spinner />;
    }
    const items = renderItems(charList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

// export default class ItemList extends Component {
//     // gotService = new gotService();
//
//     state = { charList: [] };
//
//     componentDidMount() {
//         const { getData } = this.props;
//
//         // this.gotService.getAllCharacters()
//         getData()
//             .then((charList) => {
//                 this.setState({ charList });
//             });
//     }
//
//     renderItems(arr) {
//         // return arr.map((item, i) => {
//         return arr.map((item, i) => {
//             // const { id } = item;
//             const label = this.props.renderItem(item);
//             return (
//                 <li
//                     key={i}
//                     className="list-group-item"
//                     onClick={() => this.props.onCharSelected(i + 41)}>
//                     {label}
//                 </li>
//             );
//         });
//     }
//
//     render() {
//         const { charList } = this.state;
//
//         if (!charList) {
//             return <Spinner />;
//         }
//         const items = this.renderItems(charList);
//
//         return (
//             <ul className="item-list list-group">
//                 {items}
//             </ul>
//         );
//     }
// }
