import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../styledHelpers/Colors';
import { HeaderWrapper } from '../components/MainConent/HeaderPublications/HeaderPublications';


const ProfilHeaderComponent = styled(HeaderWrapper)`
    // border: 1px solid green;
    width: 100%;
    margin: 0;
    display: block;
    
`;

const TopNavigation = styled.div`
    width: 100%;
    height: 6%;
    // border: 1px solid blue;
    display: flex;
    // justify-content: space-between;
    text-align: right;
    // padding-left: 60%; 
    
    padding-top: 1%;
    box-shadow: 1px 1px 2px grey;
`;

const NavigationPictures = styled.img`
    height: 15px;
    width: 15px;
    margin-left: 30px;
    margin-right: 5px;
    cursor: pointer;
`;

const NavigationsText = styled.div`
    font-size: 15px;
    font-family: Arial;
    color: ${Colors.black};
    cursor: pointer;
`;

const ProfileMainBox = styled.div`
    width: 100%;
    height: 90%;
    // border: 3px solid red;
    display: flex;
`;

const ProfilPictureBox = styled.div`
    // border: 1px solid green;
    height: 100%;
    width: 30%;
`;

const MainPicture = styled.img`
    height: 200px;
    width: 200px;
    margin-top: 60px;
    margin-left: 110px;
    // border: 1px solid purple;
    border-radius: 100px;
    box-shadow: 1px 1px 2px grey;
`;

const SeeProfileButton = styled.div`
    width: 100px;
    height: 15px;
    // border: 1px solid red;
    justify-content: space-between;
    text-align: center;
    cursor: pointer;
    font-family: Arial;
    font-size: 17px;
    color: ${Colors.blue};
    &:hover {
        color: ${Colors.black};
        background: ${Colors.erty};
        box-shadow: 1px 1px 2px grey;
    }
    font-weight: bold;
    margin-left: 162px;
    margin-top: 20px;
    border-radius: 15px;
    box-shadow: 1px 1px 2px grey;
`;

const InformationOneBox = styled(ProfilPictureBox)`
    padding-top: 90px;
    height: 74%;
    width: 20%;
    
`;

const TextBoxes = styled.div`
    // border: 1px solid red;
    width: 70%;
    height: 20px;
    font-size: 14px;
    color: ${Colors.black};
    font-family: Arial;
    font-weight: bold;
    padding-top: 1%;
    margin-left: 20px;
`;

const MiniIconOnRight = styled.img`
    height: 20px;
    width: 20px;
    margin-left: 27%;
    top: 0;
    cursor: pointer;
    margin-top: 5px;
`;


export const ProfilHeader: FC = () => {


    return (
        <ProfilHeaderComponent>
            <TopNavigation>
                <NavigationPictures src="../media/icons/chat.svg"/>
                <NavigationsText>Message</NavigationsText>
                <NavigationPictures src="./media/icons/ecosystem.svg"/>
                <NavigationsText>Create a request</NavigationsText>
                <NavigationPictures src="./media/icons/house2.svg"/>
                <NavigationsText>Add to a cluster</NavigationsText>
                <NavigationPictures src="./media/icons/cog.svg"/>
            </TopNavigation>
            <ProfileMainBox>
                <ProfilPictureBox>
                    <MainPicture src="./media/icons/people.svg"/>
                    <SeeProfileButton>See Profile</SeeProfileButton>
                </ProfilPictureBox>
                <InformationOneBox>
                    <TextBoxes>Konrad Baran</TextBoxes>
                    <TextBoxes>x-kom sp. z o.o.</TextBoxes>
                    <TextBoxes>Kraków</TextBoxes>
                    <TextBoxes>Partner</TextBoxes>
                </InformationOneBox>
                <InformationOneBox>
                    <TextBoxes>konradbaran@gmail.com</TextBoxes>
                    <TextBoxes>+33 (021) 23 12 5464 23</TextBoxes>
                </InformationOneBox>
                <MiniIconOnRight src="../media/icons/pencil.svg"/>
            </ProfileMainBox>
        </ProfilHeaderComponent>
    );
};