import React from 'react';
import ProviderBanner from './ProviderBanner';

const ProviderContainer = props => {

    return (
        <>
        <h3 className="category-heading">Game Providers</h3>
        <div className="provider-container d-flex">
            
            <ProviderBanner
                image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588959539/Sportsbet/evolution_swjypf.png"}>
            </ProviderBanner>
            <ProviderBanner
                image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588961275/Sportsbet/asiagaming_apgpmp.png"}>
            </ProviderBanner>
            <ProviderBanner
                image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588961275/Sportsbet/gameart_h7ovmt.png"}>
            </ProviderBanner>
            <ProviderBanner
                image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588961276/Sportsbet/booming_yd6jgv.png"}>
            </ProviderBanner>
            <ProviderBanner
                image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588961278/Sportsbet/microgaming_xawuhu.png"}>
            </ProviderBanner>
            <ProviderBanner
                image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588959539/Sportsbet/evolution_swjypf.png"}>
            </ProviderBanner>
            <ProviderBanner
                image={"https://res.cloudinary.com/dvlk2fyro/image/upload/v1588961275/Sportsbet/asiagaming_apgpmp.png"}>
            </ProviderBanner>
        </div>
        </>
    )
}
export default ProviderContainer