import { FC, useState, ChangeEvent } from 'react';
import { useDispatch, useStore } from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../styledHelpers/Colors';
import { FontSize } from '../styledHelpers/FontSize';


const EntitiesTop = styled.div`
    // border: 5px solid red;
    width:100%;
    display:flex;
    height:140px;
    margin-bottom: 20px;
    flex-direction:column;
    font-size: 10px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
`;
const ContainerTop= styled.div`
    // border: 2px solid green;
    width:100%;
    height:2.5em;
    display:flex;
    flex-direction:row;
    margin-top:2em;
`;
const BoxOne = styled.div`
    // border: 2px solid pink;
    width:30%;
    height:2em;
    display:flex;
    margin-left:1em;
`;
const TitleOne = styled.span`
    font-size: 20px;
    font-weight:bold;
    color:${Colors.grey};
`;
const ImgOne = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 20px;
    margin-top: 2px;
    cursor:pointer;
`;
const BoxTwo = styled.div`
    // border: 2px solid blue;
    width:68%;
    height:2em;
    display:flex;
    justify-content:flex-end;
`;
const ButtonOne = styled.button`
    width:8em;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid #eaecf5;
    border-radius:5px 0px 0px 5px;
    cursor:pointer;
    background-color:#eaecf5;
`;
const ButtonOneImg= styled.img`
    height: 15px;
    width: 15px;
`;
const ButtonOneText = styled.span`
    font-size: 20px;
    font-weight:bold;
    color:#3a4ea4;
    margin-left:8px;
`;
const ButtonTwo = styled.button`
    width:5.5em;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#ffffff;
    border:none;
    border:1px solid #eaecf5;
    border-radius:0px 5px 5px 0px;
    cursor:pointer;
`;
const IconButtonTwo = styled.img`
    width: 15px;
    height: 15px;
`;
const TextButtonTwo = styled.span`
    font-size:${FontSize[18]};
    font-weight:bold;
    color:#3a4ea4;
    margin-left:8px;
`;
const ContainerTwo = styled.div`
    width:100%;
    height:5em;
    display:flex;
    flex-direction:row;
`;
const ResumeWorkContainer = styled.div`
    width:100%;
    height:3em;
    display:flex;
    flex-direction:row;
    margin-bottom:2px;
`;
const ResumeWorkContainerOne = styled.div`
    width:40%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
`;
const AllButton = styled.button`
    width: 60px;
    display:flex;
    align-items:center;
    margin-left:15px;
    margin-top:15px;
    background-color:#eaecf5;
    border:1px solid #eaecf5;
    border-radius:5px;
    cursor:pointer;
`;
const ImgAll1 = styled.img`
    width: 8px;
    height: 8px;
`;
const ImgAll2 = styled.img`
    width: 8px;
    height: 8px;
`;
const AllText = styled.span`
    margin-left:7px;
    margin-right:7px;
    font-size: 13px;
    font-weight:bold;
    color:#3d50a6;
`;
const ButtonCircle = styled.button`
    width:3em;
    display:flex;
    align-items:center;
    margin-left:15px;
    margin-top:15px;
    border:none;
    background-color:#ffffff;
    border-radius:5px;
    cursor:pointer;
`;
const CircleText = styled.span`
    font-size: 20px;
    font-weight:bold;
    padding-bottom: 9px;
`;
const ButtonSort = styled.button`
    width:5em;
    display:flex;
    align-items:center;
    margin-left:15px;
    margin-top:15px;
    background-color:#ffffff;
    border-left:1px solid ${Colors.grey};
    border-right:none;
    border-top:none;
    border-bottom:none;
    cursor:pointer;
`;
const SortImg = styled.img`
    width: 15px;
    height: 15px;
    margin-left:10px;
`;
const SortText = styled.span`
    margin-left:7px;
    font-size: 10px;
    font-weight:bold;
    color:${Colors.grey};
`;
const FilterButton = styled.button`
    width:6em;
    display:flex;
    align-items:center;
    margin-left:15px;
    margin-top:15px;
    background-color:#ffffff;
    border:none;
    cursor:pointer;
`;
const ImgFilter = styled.img`
    width: 15px;
    height: 15px;
`;
const TextFilter = styled.span`
    margin-left:7px;
    font-size: 10px;
    font-weight:bold;
    color:${Colors.grey};
`;
const FullScreenButton = styled.button`
    width:3em;
    display:flex;
    align-items:center;
    margin-left:15px;
    margin-top:15px;
    background-color:#ffffff;
    border-left:1px solid ${Colors.grey};
    border-right:none;
    border-top:none;
    border-bottom:none;
    cursor:pointer;
`;
const FullScreenImg = styled.img`
    width: 15px;
    height: 15px;
    margin-left:10px;
`;
const ButtonShare = styled.button`
    width:3em;
    display:flex;
    align-items:center;
    margin-left:15px;
    margin-top:15px;
    background-color:#ffffff;
    border-left:1px solid ${Colors.grey};
    border-right:none;
    border-top:none;
    border-bottom:none;
    cursor:pointer;
`;
const ImgShare = styled.img`
    width: 15px;
    height: 15px;
    margin-left:10px;
`;
const TextShare = styled.span`
    margin-left:7px;
    font-size: 10px;
    font-weight:bold;
    color:${Colors.grey};
`;
const ResumeWorkHeaderDiv2 = styled.div`
    width:60%;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    margin-top:15px;
`;
const InputContainer = styled.div`
    display:flex;
    align-items:center;
    border:1px solid ${Colors.grey};
    height:2em;
    margin-right:8px;
`;
const InputFilter = styled.input`
    border:none;
    outline-style:none;
`;
const InputImg = styled.img`
    width: 1.3em;
    height: 1.3em;
    background-color:${Colors.white};
    margin-right:5px;
`;
const SelectFollowContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    border:2px solid #3d50a6;
    border-radius:5px;
    margin-right:1em;
    margin-left:1em;
    padding:10px;
    cursor:pointer;
    &:hover{
        background: ${Colors.erty};
    };
`;
const FollowImg = styled.img`
    width: 15px;
    height: 15px;
    margin-right:4px;
`;
const FollowSpan = styled.span`
    color:${Colors.grey};
    font-size: 17px;
    font-weight:bold;
    margin-right:4px;
`;
const ButtonDropdownArrow = styled.img`
    width: 10px;
    height: 10px;
`;

export const EntitiesTopOne: FC = () => {

    const [inputText, setInputText] = useState<string>('');
    const dispatch = useDispatch();
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const handLayoutClick = ( e: any) =>{
        console.log(e.currentTarget.name);
        dispatch({
            type:"SET_LIST_TYPE",
            payload:e.currentTarget.name
        })
    }

    
        return (
            <EntitiesTop>
                <ContainerTop>
                    <BoxOne>
                        <TitleOne>Entities</TitleOne>
                        <ImgOne src="./media/icons/cog.png" alt="setting-icon" />
                    </BoxOne>
                    <BoxTwo>
                        <ButtonOne  name='Mosaic' onClick={handLayoutClick}>
                            <ButtonOneImg src="./media/icons/mosaic.svg" alt="mosaic-img" />
                            <ButtonOneText>Mosaic</ButtonOneText>
                        </ButtonOne>
                        <ButtonTwo  name='List' onClick={handLayoutClick}>
                            <IconButtonTwo src="./media/icons/list.svg" alt="list-img" />
                            <TextButtonTwo>List</TextButtonTwo>
                        </ButtonTwo>
                    </BoxTwo>
                </ContainerTop>
                <ContainerTwo>
                    <ResumeWorkContainer>
                        <ResumeWorkContainerOne>
                            <AllButton>
                                <ImgAll1 src="./media/icons/circle.svg" alt="img-circle" />
                                <AllText>All</AllText>
                                <ImgAll2 src="./media/icons/arrow.svg" alt="arrow-img" />
                            </AllButton>
                            <ButtonCircle>
                                <CircleText>. . .</CircleText>
                            </ButtonCircle>
                            <ButtonSort>
                                <SortImg src="./media/icons/sort.svg" alt="sort-img" />
                                <SortText>Sort</SortText>
                            </ButtonSort>
                            <FilterButton>
                                <ImgFilter src="./media/icons/filter.svg" alt="filter-img" />
                                <TextFilter>Filters</TextFilter>
                            </FilterButton>
                            <FullScreenButton>
                                <FullScreenImg src="./media/icons/fullscreen.svg" alt="fullscreen-img" />
                            </FullScreenButton>
                            <ButtonShare>
                                <ImgShare src="./media/icons/share.svg" alt="share-img" />
                                <TextShare>Share</TextShare>
                            </ButtonShare>
                        </ResumeWorkContainerOne>
                        <ResumeWorkHeaderDiv2>
                            <InputContainer>
                                <InputFilter placeholder="Search..." value={inputText} onChange={inputHandler} ></InputFilter>
                                <InputImg src="./media/icons/search.png" alt="input-img"></InputImg>
                            </InputContainer>
                            <SelectFollowContainer>
                                <FollowImg src="./media/icons/followed.png" alt="follow-img"></FollowImg>
                                <FollowSpan>Followed</FollowSpan>
                                <ButtonDropdownArrow src="./media/icons/arrow.svg" alt="arrow-img"></ButtonDropdownArrow>
                            </SelectFollowContainer>
                        </ResumeWorkHeaderDiv2>
                    </ResumeWorkContainer>
                </ContainerTwo>
            </EntitiesTop>
        )
};