import { FC } from 'react';
import styled from 'styled-components';


import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { ExpandedMenu } from './ExpandedMenu';



const Wrapper2 = styled(Wrapper)`
    margin: 10px 10px 10px 10px;
    padding: 8px;
    // height: 0px;
    // border: 1px solid grey;
    // position: sticky;
`;

const InnerWrapper = styled.div`
    width: 100%;
    background: ${Colors.white};
    
`;

const RightIcons = styled.div`
    text-align: right;
    margin-top: -35px;    
`;

const InputWrapper = styled.div`
width: 500px;
margin: 10px auto;
display: flex;
justify-content: space-between;

`;

const CustomImg = styled.img`
    padding-right: 10px;
    margin: 5px;

`;

const CustomInput = styled.input`
    width: 500px;
    border-radius: 9px;
    display: flex;
    
`;

const LeftIcon = styled.div`
    width: 50px;
    text-align: center;
    // border: 1px solid red;
    position: absolute;
    padding: 2px;
`;

export const TopBar: FC = () => {

    return (
        <Wrapper2>
            <InnerWrapper>
                <LeftIcon>
                <CustomImg src ="./media/icons/logo.png" width="30px" height="30px" />
                </LeftIcon>
                
                    <ExpandedMenu />               
                <InputWrapper>
                    <CustomInput type="text" />
                    <CustomImg src="./media/icons/search.png" />
                </InputWrapper>
                    <RightIcons>
                        <CustomImg src="./media/icons/house.png" />
                        <CustomImg src="./media/icons/comments.png" />
                        <CustomImg src="./media/icons/bell.png" />
                    </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};

