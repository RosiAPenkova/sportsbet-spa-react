import React from 'react';
import CardsList from './cards/CardsList';


class ProductCard extends React.Component {

    render() {
        return  <>
        <h3 className="category-heading">Popular</h3>

            <CardsList/>

                </>
    }
}

export default ProductCard;