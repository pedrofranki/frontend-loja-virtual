import styled from 'styled-components';


export const StyledCardProduct = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 550px;
    box-shadow: 2px 0px 15px rgba(0,0,0,.2)

`;

export const StyledPictureContainer = styled.div`
    width: 100%;
    height: 450px;
    background-color: rgba(168,168,168,.2);
    margin-bottom: 5px;
`;


export const StyledProductInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10px;
`;

export const StyledGeneralProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledColorAvailableInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledColorPoint = styled.span`
    background-color: ${(props) => props.color};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #a6a6a6;
`;

export const StyledColorsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 5px 5px 0 0;
`;
