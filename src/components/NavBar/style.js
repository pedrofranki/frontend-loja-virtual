import styled from 'styled-components';

export const StyledNavBar = styled.div`
    display: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    box-shadow: 0 5px 5px rgba(0,0,0,.05);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const StyledMenuList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    transform: translateX(100px);
`;

export const StyledMenuItem = styled.li`
    list-style: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1.1px;
    font-weight: 500;
    padding: 10px 30px;

`;

export const StyledContainerIcon = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    transform: translateX(-150px);
`;

export const StyledLogo = styled.div`
    background-color: rgba(0,0,0,1);
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-right: 5px;
    transform: translate(0px, -5px);
    &::after{
        content: "";
        width: 40px;
        height: 40px;
    }
`;

export const LogoContent = styled.div`
    position: absolute;
    top: 14px;
    left: 8px;

    &::before,
    &::after{
        content: "";
        width: 25px;
        height: 1.3px;
        background-color: #CDCFCE;
        position: absolute;
        transform: rotate(-135deg);
    }

    &::before{
        transform: rotate(-135deg);
    }

    &::after{
        transform: rotate(135deg);
    }
`;

export const StyledTitle = styled.h1`
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 1.5px;
    
`;


export const StyledContainerMoreOptions = styled.div`
    padding: 0 35px;
`;

export const StyledIconContainer = styled.span`
     padding: 0 10px;
`;
