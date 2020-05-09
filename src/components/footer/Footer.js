import React from 'react';
import FooterFirstSections from './FooterFirstSections';
import FooterSecondSections from './FooterSecondSections';
import FooterThirdSections from './FooterThirdSection';

const Footer = props => {

    return (
        <>
            <div className="container footer-container ">
                <div className="row d-flex ">
            <div className="first-column">
            <FooterFirstSections/>
            </div>
                 <div className="second-column d-flex ">
                  <FooterSecondSections/> 
                </div>
                <div className="third-column d-flex">
                <FooterThirdSections/> 
                </div> 
            </div>
            </div>
        </>
    )
}
export default Footer