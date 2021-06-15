import { FC } from 'react';
import styled from 'styled-components';
import { HeaderWrapper } from '../HeaderPublications/HeaderPublications';
import { Colors } from '../../../styledHelpers/Colors';
import { boxShadow } from '../../../styledHelpers/Components';

const ResumeWrapper = styled(HeaderWrapper)`
    border: 3px solid red;
    background: ${Colors.erty};
    display: block;
`;

const ResumeItem = styled.div`
    background: ${Colors.white};
    height: 80px;
    width: 96%;
    margin: 2%;
    
`;




export const Resume: FC = () => {


    return (
        <ResumeWrapper>
            <ResumeItem></ResumeItem>
            <ResumeItem></ResumeItem>

        </ResumeWrapper>
    );
};