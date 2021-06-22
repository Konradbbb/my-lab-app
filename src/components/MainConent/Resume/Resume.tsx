import { FC, useState } from 'react';
import styled from 'styled-components';
import { HeaderWrapper } from '../HeaderPublications/HeaderPublications';
import { Colors } from '../../../styledHelpers/Colors';
import { boxShadow } from '../../../styledHelpers/Components';
import { LightGreyText } from '../../../Profile/ProfileContent';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { ICommentReducer } from '../../../reducers/commentsReducers';
import { IPostReducer } from '../../../reducers/postsReducers';
import ReactPaginate from 'react-paginate';

const ResumeWrapper = styled(HeaderWrapper)`
    // border: 3px solid red;
    background: ${Colors.erty};
    height: 850px;
    
    display: block;
    box-shadow: none; 
    // margin-top: 50px; 
`;



const ResumeItem = styled.div`
    background: ${Colors.white};
    height: 130px;
    width: 96%;
    margin: 2%;
    box-shadow: 1px 1px 2px grey;
    border-radius: 5px;
    &:hover {
        box-shadow: 1px 2px 7px ${Colors.lightBlue};  
    }
    display: block;
`;

const ResumeItemTitle = styled.div`
    // border: 1px solid red;
    height: 30px;
    width: 90%;
    font-size: 18px;
    font-family: Arial;
    padding-top: 15px;
    padding-left: 10px;
    color: ${Colors.internetBlue};
`;

const ResumeItemComment = styled.div`
    // border: 1px solid green;
    width: 99%;
    height: 40px;
    padding-left: 10px;
    padding-top: 7px;
    color: ${Colors.grey};
    font-family: Arial;
    font-size: 15px;
`;

const ResumeItemBottomInfo = styled.div`
    display: flex;
    // border: 1px solid blue;
    width: 50%;
    height: 30px;
    font-size: 12px;
    color: ${Colors.grey};
    font-family: Arial;
    padding-top: 5px;
    padding-left: 10px;
`;

const ResumeItemBottomPicture = styled.img`
    height: 10px;
    width: 10px;
    padding-top: 7px;
`;

const ResumeDot = styled.div`
    font-weight: bold;
    color: ${Colors.darkBlue};
    font-size: 10px;
    padding-top: 5px;
    margin-left: 10px;
    margin-right: 19px;
`;

const PaginationContainer = styled.div`
    font-weight: bold;
    width: 80%;
    height: 30px;
    // border: 1px solid red;
    font-family: Arial;
    font-size: 15px;
    color: ${Colors.darkBlue};
    display: flex;
`;




export const Resume: FC = () => {

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const { commentList } = useSelector<IState, ICommentReducer>(state => ({
        ...state.comment
    }))

    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));

    const [currentPage , setCurrentPage ] = useState<number>(0);

    const handlePageClick  = (data:any) => {
        const selected = data.selected;
        setCurrentPage(selected);
    }

    

    return (
        
        <ResumeWrapper>

            {
                postList.slice(currentPage, currentPage +5).map((post) => (

                <ResumeItem>
                    <ResumeItemTitle>{post.title}</ResumeItemTitle>
                    <ResumeItemComment>{post.body}</ResumeItemComment>
                    <ResumeItemBottomInfo>
                    <ResumeItemBottomPicture src="../media/icons/cog.svg"/>
                    <LightGreyText>{usersList[0].company.name}</LightGreyText>
                    <ResumeDot>.</ResumeDot>
                    <ResumeItemBottomPicture src="../media/icons/cog.svg"/>
                    <LightGreyText>Client contract</LightGreyText>
                    <ResumeDot>.</ResumeDot>
                    <LightGreyText>Updated 3 days ago by {usersList[0].name}</LightGreyText>
                    </ResumeItemBottomInfo>
                </ResumeItem>

                ))
            } 
    

            <PaginationContainer>

                <ReactPaginate
            
                previousLabel={'PREVIOUS'}
                nextLabel={'NEXT'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={postList.length}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page'}
                previousClassName={'previous'}
                nextClassName={'next'}  
                  
            />
                </PaginationContainer>
        </ResumeWrapper>
    );
};