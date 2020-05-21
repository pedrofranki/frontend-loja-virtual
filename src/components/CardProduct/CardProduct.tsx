import * as React from 'react';
import {StyledProductInfo,
    StyledPictureContainer,
    StyledCardProduct,
    StyledGeneralProductInfo,
    StyledColorAvailableInfo,
    StyledColorPoint,
    StyledColorsContainer
} from './style'
import './style.css';

export interface CardProductProps {
    
}
 
const CardProduct: React.SFC<CardProductProps> = () => {
    return ( 
        <StyledCardProduct>
            <StyledPictureContainer>
                
            </StyledPictureContainer>
            <StyledProductInfo>
                <StyledGeneralProductInfo>
                    <span className="card-color-product">BLACK</span>
                    <span className="card-name-product">v-Neck-Split-Hem</span>
                    <span className="card-name-price">$44</span>
                </StyledGeneralProductInfo>
                <StyledColorAvailableInfo>
                    <span className="card-available-colors">3 Colors</span>
                    <StyledColorsContainer>
                        <StyledColorPoint color='#1F1F1F'/>
                        <StyledColorPoint color='white'/>
                        <StyledColorPoint color='#5F5758'/>
                    </StyledColorsContainer>
                </StyledColorAvailableInfo>
            </StyledProductInfo>
        </StyledCardProduct>
     );
}
 
export default CardProduct;