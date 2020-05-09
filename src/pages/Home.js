import React from 'react';
import PromoContainer from '../components/promo-banner/PromoContainer';
import LogoWrapper from '../components/LogoWrapper';
import SportsCategories from '../components/SportsCategories'
import ProductCard from '../components/ProductCards';
import PromotionContainer from '../components/promotion/PromotionContainer';
import ProviderContainer from '../components/providers/ProviderContainer';
class Home extends React.Component {


    render() {
        return <>
            <div className="row">
                <div className="col">
                    <LogoWrapper/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PromoContainer/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <SportsCategories/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ProductCard/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PromotionContainer/>
                </div>
            </div>

             <div className="row">
                <div className="col">
                    <ProviderContainer/>
                </div>
            </div> 
            
        </>
    }
}



export default Home;


 