import { FC } from 'react';
import { Colors } from '../../../../styledHelpers/Colors';
import { HeaderWrapper } from '../../HeaderPublications/HeaderPublications';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../../../reducers';
import { IPostReducer } from '../../../../reducers/postsReducers';
import { IUsersReducer } from '../../../../reducers/usersReducers';
import { ISinglePhotoReducer } from '../../../../reducers/photoReducers';
import { LightGreyText } from '../../../../Profile/ProfileContent';

const WorkSpaceHeaderWrapper = styled(HeaderWrapper)`
    width: 100%;
    margin: 0;
    display: block;
    height: 300px;
`;

const MainPictureHeader = styled.img`
    width: 100%;
    height: 180px;
`;

const HeaderInfoWrapper = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
`;

const InfoPicture = styled.img`
    width: 80px;
    height: 80px;
    margin-left: 30px;
    margin-top: 25px;
`;

const InfoTextWrapper = styled.div`
    display: block;
    height: 100%;
    width: 90%;

`;

const InfoTitle = styled.div`
    width: 100%;
    height: 40px;
    justify-content: space-between;
    display: flex;
`;

const Title = styled.div`
    width:30%;
    height: 30px;
    font-family: Arial;
    font-size: 22px;
    color: ${Colors.darkBlue};
    margin-left: 20px;
    padding-top: 10px;
`;

const TitleImg = styled.img`
    height: 15px;
    width: 15px;
    margin-top: 10px;
    margin-right: 10px;
`;

const InfoContent = styled.div`
    width: 100%;
    height: 60px;
    margin-top: 10px;
`;

const InfoContentText = styled(LightGreyText)`
    font-size: 15px;
`;


export const WorkSpacePageHeader: FC = () => {

    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    const { usersList, someData } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const { photoList } = useSelector<IState, ISinglePhotoReducer>(state => ({
        ...state.photo
    }));



    return (
        <WorkSpaceHeaderWrapper>
            <MainPictureHeader src={photoList[0].url}/>
                <HeaderInfoWrapper>
                    <InfoPicture src='../media/icons/entities2.svg'/>
                    <InfoTextWrapper>
                        <InfoTitle>
                            <Title>Clients contract</Title>
                            <TitleImg src='../media/icons/cog.svg'/>
                        </InfoTitle>
                        <InfoContent>
                            <InfoContentText>{postList[0].body}</InfoContentText>
                        </InfoContent>
                    </InfoTextWrapper>
                </HeaderInfoWrapper>
        </WorkSpaceHeaderWrapper>
    );
};