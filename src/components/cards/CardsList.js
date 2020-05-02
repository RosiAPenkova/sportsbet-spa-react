import React from 'react';
import Cards from './Cards';

const CardList = props => {

    return (
        <div className="product-list">
            <div className="row">
                <Cards
                    image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588430808/Sportsbet/product_card-livecasino_1_ph7hhq.jpg"}
                    title={"Live dealer"}
                />
                <Cards
                    image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588430816/Sportsbet/product_card-poker_bbbrjg.jpg"}
                    title={"Poker"}
                />
                <Cards
                    image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588430813/Sportsbet/product_card-bombayclub2_vq2lhm.png"}
                    title={"Bombay Club"}
                />
                <Cards
                    image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588430811/Sportsbet/product_card-promotions_vgrqxr.jpg"}
                    title={"Promotions"}
                />
                <Cards
                    image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588430810/Sportsbet/product_card-livechat_bg0rok.jpg"}
                    title={"Support"}
                />
            </div>
        </div>
    )
}
export default CardList