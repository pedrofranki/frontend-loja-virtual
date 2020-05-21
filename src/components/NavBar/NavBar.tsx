import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import {
  StyledMenuItem,
  StyledNavBar,
  StyledMenuList,
  StyledContainerIcon,
  StyledTitle,
  StyledLogo,
  LogoContent,
  StyledContainerMoreOptions,
  StyledIconContainer,
} from './style';


const NavBar = () => {
  const [menuItems, setMenuItems] = useState([{ name: 'all shirts' }, { name: 'collections' }, { name: 'collabs' }]);
  return (
    <>
      <StyledNavBar>
        <StyledMenuList>
          {
        menuItems.map((menuItem) => (<StyledMenuItem>{menuItem.name}</StyledMenuItem>))
        }
        </StyledMenuList>

        <StyledContainerIcon>
          <StyledLogo />
          <LogoContent />
          <StyledTitle>CUTS</StyledTitle>
        </StyledContainerIcon>

        <StyledContainerMoreOptions>

          <StyledIconContainer>
            <SearchIcon />
          </StyledIconContainer>

          <StyledIconContainer>
            <ShoppingCartIcon />
          </StyledIconContainer>
        </StyledContainerMoreOptions>
      </StyledNavBar>


    </>
  );
};

export default NavBar;
