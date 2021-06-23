import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';


const GreyBoxWrapper = styled.div`
    border: 2px solid red;
    width: 100%;
    height: 300px;
    background: ${Colors.lightGrey};
    border-top: 1px solid ${Colors.grey};
    border-bottom: 1px solid ${Colors.grey};
`;

export const WorkSpaceGreyBox: FC = () => {


    return (
        <GreyBoxWrapper>

        </GreyBoxWrapper>
    );
};