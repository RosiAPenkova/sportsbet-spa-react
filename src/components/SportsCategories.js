import React from 'react';
import SportsList from './categories/SportsList';


class SportsCategories extends React.Component {

    render() {
        return  <>
        <h3 className="category-heading">Sports categories</h3>
       
            <SportsList/>
            
                </>
    }
}

export default SportsCategories;