import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';
import { WorkSpacePageHeader } from './WorkSpacePageHeader';
import { HeaderWrapper } from '../../HeaderPublications/HeaderPublications';


const WorkSpaceMainWrapper = styled(HeaderWrapper)`
    border: 3px solid blue;
    height: 1500px;
    background: ${Colors.erty};
`;

export const WorkSpacePageMain: FC = () => {


    return (
        <WorkSpaceMainWrapper>
            <WorkSpacePageHeader>

            </WorkSpacePageHeader>
           
        </WorkSpaceMainWrapper>
    );
};