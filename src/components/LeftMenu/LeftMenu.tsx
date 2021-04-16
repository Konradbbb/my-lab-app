import { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const LeftMenuWrapper = styled(Wrapper)`
    box-shadow: none;
    width: 230px;
    height: 400px;
    background: ${Colors.white};
    // border: 1px solid green;
    border-radius: 1.5%;
    margin: 14px;
    padding: 0;
    display: block;

`;

const Picture = styled.img`
    margin: 15px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    // border: 1px solid black;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const BoxesWrapper = styled.div`
    width: 200px;
    height: 195px;
    padding: 0;
    // border: 1px solid red;
    box-shadow: 1px 1px 3px grey;
    margin-left: 10px;
    padding: 3px;
`;

const PictureBox = styled.div`
    width: 200px;
    height: 110px;
    text-align: bottom;
    margin-top: 1px;
    // border: 1px solid black;
    border-radius: 1%;
    padding: 0;
    border-bottom: 1px solid grey;

`; 
const ActionsBox = styled.div`
    width: 200px;
    height: 70px;
    margin-top: 0;
    // border: 1px solid black;
    border-radius: 3%;
    padding: 0;
    text-align: bottom;
    // border-top: 1px solid grey;
    display: block;
`;

const NetworkBox = styled.div`
    // border: 1px solid yellow;
    width: 190px;
    height: 25px;
    margin-top: 6px;
    margin-left: 4px;
    // display: inline-grid;
    // grid-auto-flow: column;
    // gap: 1rem;
    // flex-wrap: wrap;
    // flex-direction: column;
`;

const PublicationsBox = styled(NetworkBox)`

`;

const RightPicturesInBoxes = styled.img`
    border: 1px solid grey;
    margin: 1px;
    padding: 3px;
    border-radius: 20%;
    width: 15px;
    
`;

const LeftPicturesInBoxes = styled.img`
    margin-left: 5px;
    text-align: left;
`;

const TextBox = styled.span`
    font-size: 10px;
    vertical-align: middle;
    margin-left: 5%;
    margin-right: 30%;
    
`;



export const LeftMenu: FC = () => {
    return (
        <LeftMenuWrapper>

            <BoxesWrapper>
                <PictureBox>
                    <Picture src ="./media/icons/administration.png" />

                </PictureBox>
                <ActionsBox>    
                    <NetworkBox>
                        <LeftPicturesInBoxes src="./media/icons/network.png"/>
                            <TextBox>Your network</TextBox>
                        <RightPicturesInBoxes src="./media/icons/user-plus.png"/>
                    </NetworkBox>
                    <PublicationsBox>
                        <LeftPicturesInBoxes src="./media/icons/publications.png"/>
                            <TextBox>Your publications </TextBox>
                        <RightPicturesInBoxes src="./media/icons/plus.png" width="5px" height="11px"/>
                    </PublicationsBox>
                </ActionsBox>           
            </BoxesWrapper>
            
        
        </LeftMenuWrapper>
    );
};