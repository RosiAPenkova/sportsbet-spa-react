import React from 'react';
import SportsList from './categories/SportsList';


class SportsCategories extends React.Component {

    render() {
        return  <>
        <h3 className="category-heading">Sports categories</h3>
        <ul className="unorder-list">
            <li className="list">
                <a className="sports-link">
            <SportsList/>
            </a>
                </li></ul>
                </>
    }
}

export default SportsCategories;