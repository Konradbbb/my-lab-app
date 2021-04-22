import { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';


import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { ExpandedMenu } from './ExpandedMenu';



const Wrapper2 = styled(Wrapper)`
    margin: 10px 10px 10px 10px;
    padding: 8px;
    // height: 0px;
    // border: 1px solid grey;
    max-height: 50px;
    position: sticky;
    background: ${Colors.white};

`;

const InnerWrapper = styled.div`
    width: 100%;
    // border: 1px solid black;
`;

const RightIcons = styled.div`
    text-align: right;
    margin-top: -28px; 
    
`;

const InputWrapper = styled.div`
width: 500px;
margin:-25px auto;
display: flex;
justify-content: space-between;
// border: 1px solid grey;

`;

const CustomImg = styled.img`
    padding-right: 10px;
    margin: 5px;
`;

const CustomInput = styled.input`
    width: 500px;
    border-radius: 9px;
    display: flex;
    border: 1px solid grey;
    text-align: center;
    &:hover {
        outline: none;
    }
    &:focus {
        outline: none;
    }
`;

const MenuWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 13%;
    justify-content: space-between;
    // border: 1px solid black;
    left: 7%;
    top: 1px;
    height: 30px;
`;

const LeftSide = styled.div`

`;

const LeftIcon = styled.div`
    width: 50px;
    text-align: center;
    // border: 1px solid red;
    position: absolute;
    bottom: 9px;
`;

const InnerSpan = styled.span`
    // border: 1px solid red;
    // height: 50px;
    display: inline-block;
    bottom: 100px;
    margin-left: 50px;
    `;

const MenuHomeIcon = styled(CustomImg)`
    position: absolute;
    margin-top: -4px;
    `;


export const TopBar: FC = props => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    }

    return (
        <Wrapper2>
            <InnerWrapper>

                <LeftIcon>
                <CustomImg src ="./media/icons/logo.png" width="30px" height="30px" />
                </LeftIcon>

                    <MenuWrapper ref={wrapperRef} onClick={menuHandler}>
                        <LeftSide>
                            <MenuHomeIcon src="./media/icons/house2.svg" alt=""/>
                            <InnerSpan>Home</InnerSpan>
                        </LeftSide> 
                        <img src="./media/icons/arrow-down.svg" alt=""/>
                        {dropdownOpen && 
                            <ExpandedMenu /> 
                        }
                    </MenuWrapper>
                
                                  
                <InputWrapper>
                    <CustomInput type="text" placeholder="Search Legalcluster"/>
                    <CustomImg src="./media/icons/search.svg" />
                </InputWrapper>
                    <RightIcons>
                        <CustomImg src="./media/icons/house.svg" />
                        <CustomImg src="./media/icons/comments.svg" />
                        <CustomImg src="./media/icons/bell.svg" />
                    </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};

