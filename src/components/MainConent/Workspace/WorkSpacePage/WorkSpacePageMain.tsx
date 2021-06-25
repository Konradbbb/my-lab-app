import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';
import { WorkSpacePageHeader } from './WorkSpacePageHeader';
import { HeaderWrapper } from '../../HeaderPublications/HeaderPublications';
import { WorkSpaceGreyBox } from './WorkSpaceGreyBox';

const WorkSpaceMainWrapper = styled(HeaderWrapper)`
    // border: 3px solid blue;
    display: block;
    height: 1500px;
    background: ${Colors.erty};
    box-shadow: none;
`;

export const WorkSpacePageMain: FC = () => {
    
    return (
        <WorkSpaceMainWrapper>
            <WorkSpacePageHeader>

            </WorkSpacePageHeader>
            <WorkSpaceGreyBox>

            </WorkSpaceGreyBox>
        </WorkSpaceMainWrapper>
    );
};