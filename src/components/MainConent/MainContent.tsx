import { FC } from 'react';
import styled from 'styled-components';
import { HeaderPublications } from './HeaderPublications/HeaderPublications';
import { WorkSpace } from './Workspace/WorkSpace';
import { Resume } from './Resume/Resume';

const MainConentWrapper = styled.div`
    display: block;
    border: 1px solid red;
    overflow: scroll;
`;

export const MainContent: FC = () => {
    return (
        <MainConentWrapper>
            <HeaderPublications></HeaderPublications>
            <span>Workspace</span>
            <WorkSpace></WorkSpace>
            <span>Resume your work</span>
            <Resume></Resume>

        </MainConentWrapper>
    );
};