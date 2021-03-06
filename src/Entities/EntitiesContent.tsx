import { ChangeEvent, FC} from 'react';
import styled from 'styled-components';
import { IState } from '../reducers';
import { IPostReducer } from '../reducers/postsReducers';
import { useSelector, useStore } from 'react-redux';
import { ISinglePhotoReducer } from '../reducers/photoReducers'
import { IUsersReducer } from '../reducers/usersReducers';
import { Colors } from '../styledHelpers/Colors';


const EntitiesContentContainer = styled.div`
    // border: 1px solid red;
    margin-top:20px;
    width:95%;
    height: 300px;
    display:flex;
    .List{
        display: block;
        .item{
            display:flex;
            border: 1px solid red;
            width:100%;
            &:hover {
                box-shadow: 1px 2px 7px ${Colors.lightBlue};
            }
        }
    }
`;
const EntitiesContainerMosaic = styled.div`
    color: ${Colors.white};
    width:100%;
    margin:auto;
    margin-left:10px;
    display: inline-grid;
    grid-template-columns: auto auto auto auto;
    
`;
const MainEntities = styled.div`
    background: ${Colors.white};
    padding-left: 5px;
    width: 300px;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 5px 5px 0px lightgrey};
    max-height50px;
    margin:15px auto;
    margin-left: 30px;
    padding-bottom:5px;
    &:hover{
        box-shadow: 1px 2px 7px ${Colors.lightBlue};
    }
`;
const MiniEntities = styled.div`
    display: flex;
    align-items: center;
    
`;
const ImgMiniEntities = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-left: 15px;
`;
const MiniEntitiesTwo = styled.div`
    // border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 6px;
`;
const TitleEntities = styled.span`
    font-size: 20px;;
    // font-weight: bold;
    color: ${Colors.internetBlue};
`;
const DescriptionEntities = styled.p`
    font-size: 12px;
    color: ${Colors.grey};
    margin-top: 2em;
`;


export const EntitiesContent: FC = () => {

    const {posts} = useStore().getState();

    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    const { photoList } = useSelector<IState, ISinglePhotoReducer>(state => ({
        ...state.photo
    }));
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));


    
    if (usersList?.length > 0) {
        return (
            <EntitiesContentContainer>
                <EntitiesContainerMosaic className={posts.listType}>

                    {
                        postList.map((post) => (
                            <MainEntities className='item'>
                                <MiniEntities>
                                    <ImgMiniEntities src={photoList?.[1]?.url} alt="api-image" />
                                </MiniEntities>
                                <MiniEntitiesTwo>
                                    <TitleEntities>{post.title}</TitleEntities>
                                    <DescriptionEntities>{usersList?.[1]?.address.city} {usersList?.[1]?.address.street} {usersList?.[1]?.address.zipcode}</DescriptionEntities>
                                </MiniEntitiesTwo>
                            </MainEntities>
                        ))
                    }

                </EntitiesContainerMosaic>
            </EntitiesContentContainer>
        )
    }
    else {
        return (
            <EntitiesContentContainer>
                <EntitiesContainerMosaic className={posts.listType}>

                    
                            <MainEntities className='item'>
                                <MiniEntities>
                                    <ImgMiniEntities src="" alt="api-image" />
                                </MiniEntities>
                                <MiniEntitiesTwo>
                                    <TitleEntities>Konrad</TitleEntities>
                                    <DescriptionEntities>Description</DescriptionEntities>
                                </MiniEntitiesTwo>
                            </MainEntities>
                      

                </EntitiesContainerMosaic>
            </EntitiesContentContainer>
        )
    }

};