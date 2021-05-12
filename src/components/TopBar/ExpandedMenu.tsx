import { FC } from 'react';
import styled from 'styled-components';
import { BottomMenuBoxes } from '../LeftMenu/LeftMenu';
import { LeftPicturesInBoxes } from '../LeftMenu/LeftMenu';
import { BottomTextBox } from '../LeftMenu/LeftMenu';
import {Picture } from '../LeftMenu/LeftMenu';
import {Link} from 'react-router-dom';
import { Colors } from '../../styledHelpers/Colors';
 

const ExpandedWrapperMenu = styled.div`
    position: absolute;
    width: 115%;
    height: 1770%;
    margin-left: -0.47%;
    background: white;
    top: 100%;
    border: 1px solid grey;
    border-radius: 2px;
    border-top: none;

    animation-name: example;
    animation-duration: 1s;
    animation-fill-mode: both;
    

    @keyframes example {
        
        from {top: 0px;}
        to {top: 100%;}
      }

`;

const ExtendedMenuInput = styled.input`
    width: 90%;
    margin: 5%;
    margin-left: 3%;
    margin-bottom: 0;
    &:hover {
        outline: none;
    }
    &:focus {
        outline: none;
    }
`;

const Category = styled.div`
    // border: 1px solid green;
    font-family: Arial;
    font-size: 10px;
    font-weight: bold;
    color: grey;
    margin: 4%;
    margin-left: 3%;
    
`;

const MenuListTextBox = styled(BottomTextBox)`
    font-size: 13px;
    font-weight: normal;
`;

const ExpandedMenuCustomLink = styled(Link)`
    text-decoration: none;
    font-size: 13px;
    font-weight: normal;
    margin-left: 15px;
    font-family: Arial;
    color: ${Colors.black};
`;

const ExpandedMenuList = styled.div`
    border-bottom: 1px solid grey;
    margin-top: 0;
    overflow: scroll;
    height: 330px;
`;


const ListElement = styled(BottomMenuBoxes)`
    width: 80%;
    heigth: 50px;
    // border: 1px solid grey;
    border-radius: 5px;
    margin: 1%;
    margin-left: 3%;
    // overflow: scroll;

    &: hover {
        border-radius: 5px;
        background: lightblue;
    }
`;

const ExpandedMenuProfilePicture = styled(Picture)`
    height: 35px;
    width: 35px;  
    margin: 3px 3%;
    &:hover {
        transform: rotate(180deg);
        animation-duration: 5s;
    }
`;

const ProfileBox = styled(ExpandedMenuList)`
    height: 100px;
    border-bottom: none;
    width: 90%;
    margin-left: 3%;
   
`;

const LogoutBox = styled.div`
    height: 20px;
    width: 100%;
    border-top: 1px solid grey;
    padding-top: 3%;
    display: flex;
    justify-content: center;
    &:hover {
        background: lightblue;
        border-radius: 5px;
        cursor: pointer;
    }
`;

const LogoutText = styled(MenuListTextBox)`
    margin-left: 7px;
    color: grey;
    height: 15px;
   
`;

const AccountMainBox = styled.div`
    height: 40px;
    width: 99%;
    // border: 1px solid grey;
    display: flex;
    
`;

const AccountInformationsBox = styled.div`
    height: 39px;
    width: 100%;
    // border: 1px solid red;
    display: grid;
    // padding-top: 2%;
    // padding-right: 15%;
`;

const SeeProfileText = styled(MenuListTextBox)`
    color: blue;
    font-size: 10px;
    font-weight: bold; 
    // border: 1px solid blue;
    margin: 0 3%;
    width: 50%;
`;

const ProfilNameText = styled(MenuListTextBox)`
    margin-left: 3%;
    width: 80%;
    // border: 1px solid black;
    margin-top: 0;
`;

export const ExpandedMenu: FC = () => {
    return (
        <ExpandedWrapperMenu>
            <ExtendedMenuInput placeholder="Filter..."/>    

            <ExpandedMenuList>
                
                <Category>Platform</Category>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/house2.svg"/>
                    <ExpandedMenuCustomLink to='/home'>Home</ExpandedMenuCustomLink>
                </ListElement>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/publications.svg"/>
                    <ExpandedMenuCustomLink to='/publications'>Publications</ExpandedMenuCustomLink>
                </ListElement>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/people.svg"/>
                    <ExpandedMenuCustomLink to='/people'>People</ExpandedMenuCustomLink>
                </ListElement>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/entities2.svg"/>
                    <ExpandedMenuCustomLink to='/entities'>Entities</ExpandedMenuCustomLink>
                </ListElement>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/administration.svg"/>
                    <ExpandedMenuCustomLink to='/administration'>Administration</ExpandedMenuCustomLink>
                </ListElement>

                <Category>Workspaces</Category>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/entities2.svg"/>
                    <MenuListTextBox>Client contract</MenuListTextBox>
                </ListElement>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/comments.svg"/>
                    <MenuListTextBox>Comments</MenuListTextBox>
                </ListElement>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/house.svg"/>
                    <MenuListTextBox>Home Icon</MenuListTextBox>
                </ListElement>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/house.svg"/>
                    <MenuListTextBox>Home Icon</MenuListTextBox>
                </ListElement>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/house.svg"/>
                    <MenuListTextBox>Home Icon</MenuListTextBox>
                </ListElement>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/house.svg"/>
                    <MenuListTextBox>Home Icon</MenuListTextBox>
                </ListElement>

                <Category>Other category</Category>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/administration.svg"/>
                    <MenuListTextBox>Administration</MenuListTextBox>
                </ListElement>
                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/administration.svg"/>
                    <MenuListTextBox>Administration</MenuListTextBox>
                </ListElement>
                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/administration.svg"/>
                    <MenuListTextBox>Administration</MenuListTextBox>
                </ListElement>
                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/administration.svg"/>
                    <MenuListTextBox>Administration</MenuListTextBox>
                </ListElement>
                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/administration.svg"/>
                    <MenuListTextBox>Administration</MenuListTextBox>
                </ListElement>

            </ExpandedMenuList>

            <Category>Account</Category>


            <ProfileBox>

                <AccountMainBox>
                    <ExpandedMenuProfilePicture src ="./media/icons/administration.svg"/>
                    <AccountInformationsBox>
                        <ProfilNameText>Konrad Baran</ProfilNameText>
                        <SeeProfileText>See profile</SeeProfileText>
                    </AccountInformationsBox>
                </AccountMainBox>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/privacy.svg"/>
                    <MenuListTextBox>Privacy</MenuListTextBox>
                </ListElement>

                <ListElement>
                    <LeftPicturesInBoxes src="./media/icons/settings.svg"/>
                    <MenuListTextBox>Setting</MenuListTextBox>
                </ListElement>
            
            </ProfileBox>

            <LogoutBox>
                    <LeftPicturesInBoxes src="./media/icons/logout.svg" height="15px" width="15px"/>
                    <LogoutText>Logout</LogoutText>
            </LogoutBox>

        </ExpandedWrapperMenu>
    );
};