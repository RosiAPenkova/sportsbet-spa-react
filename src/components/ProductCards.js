import React from 'react';
import CardsList from './cards/CardsList';


class ProductCard extends React.Component {

    render() {
        return  <>
        <h3 className="category-heading">Popular</h3>
        <ul className="unorder-list">
            <li className="list">
                <a className="sports-link">
            <CardsList/>
            </a>
                </li></ul>
                </>
    }
}

export default ProductCard;