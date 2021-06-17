import { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import {Link} from 'react-router-dom';

const LeftMenuWrapper = styled(Wrapper)`
    box-shadow: none;
    width: 230px;
    height: 195px;
    background: ${Colors.white};
    // border: 1px solid green;
    border-radius: 1.5%;
    margin: 14px;
    margin-left: 30px;
    display: block;
    padding: 0;
    padding-bottom: 6px;
    // position: relative;

`;

export const Picture = styled.img`
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
    box-shadow: 1px 1px 5px grey;
    // margin-left: 10px;
    padding: 3px;
`;

const PictureBox = styled.div`
    width: 200px;
    height: 130px;
    text-align: bottom;
    margin-top: 1px;
    // border: 1px solid black;
    border-radius: 1%;
    padding: 0;
    border-bottom: 1px solid grey;
    display: grid;
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
    // border: 1px solid grey;
    width: 190px;
    height: 25px;
    margin-top: 6px;
    margin-left: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        background: lightblue;
        border-radius: 5px;

    }
`;

const PublicationsBox = styled(NetworkBox)`

`;

const RightPicturesInBoxes = styled.img`
    // border: 1px solid grey;
    // margin: 1px;
    padding: 3px;
    border-radius: 20%;
    width: 15px;

`;

export const LeftPicturesInBoxes = styled.img`
    margin-left: 5px;
`;

const TextBox = styled.span`
    font-size: 10px;
    margin-left: -30px;
    font-family: Arial;
    font-weight: bold;  
`;

const BottomBoxConent = styled.div`
    width: 200px;
    height: 110px;
    // border: 1px solid black;
    display: block;
    margin-top: 20px;
`;

export const BottomMenuBoxes = styled(NetworkBox)`
    // border: 1px solid black;
    justify-content: flex-start;
    
`;

export const BottomTextBox = styled(TextBox)`
    margin-left: 15px;
`;

export const CustomLink = styled(Link)`
    font-size: 10px;
    margin-left: -30px;
    font-family: Arial;
    font-weight: bold;  
    margin-left: 15px;
    text-decoration: none;
    color: ${Colors.black};
`;

const PictureTextBox = styled(Link)`
    margin-left: 0%;
    text-align: center;
    color: #3366cc; 
    // border: 1px solid grey;
    font-family: Arial;
    text-decoration: none;

`;

const SmallPictureTextBox = styled.span`
    font-size: 9px;
    text-align: center;
    margin-left: 0%;
    font-family: Arial;
    font-weight: bold;
`;


export const LeftMenu: FC = () => {
    return (
        <LeftMenuWrapper>

            <BoxesWrapper>

                <PictureBox>
                    <Picture src ="./media/icons/administration.svg" height="10px" width="10px" />
                    <PictureTextBox to='/my_profile'>Konrad Baran</PictureTextBox>
                    <SmallPictureTextBox>Logan Kapuczino</SmallPictureTextBox>
                </PictureBox>

                <ActionsBox> 

                    <NetworkBox>
                        <LeftPicturesInBoxes src="./media/icons/network.svg" height="20px" width="20px"/>
                            <CustomLink to='/network'>Your network</CustomLink>
                        <RightPicturesInBoxes src="./media/icons/user-plus.svg"/>
                    </NetworkBox>

                    <PublicationsBox>
                        <LeftPicturesInBoxes src="./media/icons/publications.svg"/>
                            <CustomLink to='/your_publications'>Your publications</CustomLink>
                        <RightPicturesInBoxes src="./media/icons/plus.svg" width="5px" height="11px"/>
                    </PublicationsBox>

                </ActionsBox>

            </BoxesWrapper>

            <BottomBoxConent>

                <BottomMenuBoxes>
                    <LeftPicturesInBoxes src="./media/icons/publications.svg"/>
                    <CustomLink to='/publications'>Publications</CustomLink>
                </BottomMenuBoxes>

                <BottomMenuBoxes>
                    <LeftPicturesInBoxes src="./media/icons/ecosystem.svg"/>
                    <CustomLink to='/ecosystem'>Ecosystem</CustomLink>
                </BottomMenuBoxes>

                <BottomMenuBoxes>
                <LeftPicturesInBoxes src="./media/icons/entities.svg" height="20px" width="20px"/>
                    <CustomLink to="/entities">Entities</CustomLink>
                </BottomMenuBoxes>

            </BottomBoxConent>

            
        
        </LeftMenuWrapper>
    );
};