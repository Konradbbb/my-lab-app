import { FC } from 'react';
import styled from 'styled-components';
import { HeaderPublications } from './HeaderPublications/HeaderPublications';
import { WorkSpace } from './Workspace/WorkSpace';
import { Resume } from './Resume/Resume';
import { Colors } from '../../styledHelpers/Colors'

const MainConentWrapper = styled.div`
    display: block;
    // border: 1px solid red;
    overflow: scroll;
`;

const MainContentTitles = styled.div`
    font-family: Arial;
    color: ${Colors.grey};
    font-size: 20px;
    margin-left: 12%;
`;

export const MainContent: FC = () => {
    return (
        <MainConentWrapper>
            <HeaderPublications></HeaderPublications>
            <MainContentTitles>Workspace</MainContentTitles>
            <WorkSpace></WorkSpace>
            <MainContentTitles>Resume your work</MainContentTitles>
            <Resume></Resume>

        </MainConentWrapper>
    );
};