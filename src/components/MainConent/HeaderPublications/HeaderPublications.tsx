import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { CustomLink } from '../../LeftMenu/LeftMenu';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPostReducer } from '../../../reducers/postsReducers';
import { IUsersReducer } from '../../../reducers/usersReducers';



export const HeaderWrapper = styled.div`
// border: 1px solid red;
background: ${Colors.white};
width: 80%;
height: 380px;
margin: 15px;
margin-left: 10%;
margin-top: 0;
box-shadow: 1px 1px 2px grey;
border-radius: 4px;
display: flex;
`;

export const PicturePublications = styled.div`
    height: 100%;
    width: 30%;
    // border: 1px solid green;
    background: pink;
`;

const PublicationsWrapper = styled.div`
    height: 100%;
    width: 70%;
    // border: 1px solid red;
    display: block;
    
`;

const HeaderTitle = styled.div`
    color: ${Colors.black};
    font-size: 23px;
    font-family: Arial;
    margin: 10px;
    margin-bottom: 1%;
    margin-top: 10px;
    // border: 1px solid green;
`;

const HeaderItem = styled.div`
    // border: 1px solid blue;
    margin: 10px;
    height: 25%;
    display: flex;
`;

const ItemPicture = styled.div`
    margin: 2px;
    width: 15%;
    height: 90%;
    background: green;
    margin-right: -25px;
`;

const ItemMainText = styled.div`
    // border: 1px solid pink;
    width: 80%;
    height: 80%;
    margin: auto;
    display: block;
    position: relative;
`;

const ItemInfo = styled.div`
    // border: 1px solid red;
    height: 20px;
    width: 35%;
    position: absolute;
    bottom: 0%;
    left: 0%;
    display: flex;
    justify-content: flex-start;
`;

export const ItemDataInfo = styled.div`
    // border: 1px solid green;
    height: 80%;
    width: 30%;
    font-size: 12px;
    font-family: Arial;
    text-align: center;
    padding-top: 2px;
    color: ${Colors.grey}
`;

const ItemDataPivture = styled.div`
    background: green;
    border-radius: 50px;
    height: 90%;
    width: 20px;
`;

 export const PublicationsLink = styled(CustomLink)`
    tex-decoriations: none;
    font-size: 12px;
    font-family: Arial;
    color: ${Colors.blue};
    &:hover {
        color: ${Colors.black};
        
    }
    margin-left: 15px;
    
`;


export const HeaderPublications: FC = () => {

    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));


    if (usersList?.length > 0){
        return (
            <HeaderWrapper>
                <PicturePublications />
                <PublicationsWrapper>
                    <HeaderTitle>Latest publications</HeaderTitle>
                    <HeaderItem>
                        <ItemPicture/>
                        <ItemMainText>
                                <span className="PublicationText">{postList[0].body}</span>
                            <ItemInfo>
                                <ItemDataInfo> 7 Jan 2021</ItemDataInfo>
                                <ItemDataPivture/>
                                <ItemDataInfo>{usersList[0].name}</ItemDataInfo>
                            </ItemInfo>
                        </ItemMainText>
                        
                    </HeaderItem>
    
                    <HeaderItem>
                        <ItemPicture/>
                        <ItemMainText>
                                <span className="PublicationText">{postList[1].body}</span>
                            <ItemInfo>
                            <ItemDataInfo> 7 Jan 2021</ItemDataInfo>
                                <ItemDataPivture/>
                                <ItemDataInfo>{usersList[1].name}</ItemDataInfo>
                            </ItemInfo>
                        </ItemMainText>
                        
                    </HeaderItem>
    
                    <HeaderItem>
                        <ItemPicture/>
                            <ItemMainText>
                               <span className="PublicationText">{postList[2].body}</span>
                                <ItemInfo>
                                    <ItemDataInfo> 7 Jan 2021</ItemDataInfo>
                                    <ItemDataPivture/>
                                    <ItemDataInfo>{usersList[2].name}</ItemDataInfo>
                                </ItemInfo>
                            </ItemMainText>
                          
                    </HeaderItem>
    
                    <PublicationsLink to="/publications">See more publications</PublicationsLink>
                </PublicationsWrapper>
            </HeaderWrapper>
    
        )} else {
            return <></>
        }
        
    
};