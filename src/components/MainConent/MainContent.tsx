import { FC } from 'react';
import styled from 'styled-components';
import { HeaderPublications } from './HeaderPublications/HeaderPublications';
import { WorkSpace } from './Workspace/WorkSpace';
import { Resume } from './Resume/Resume';
import { Colors } from '../../styledHelpers/Colors'
import { InputFilter } from '../../Entities/EntitiesTopComponent';
import { InputImg } from '../../Entities/EntitiesTopComponent';
import { CorrespondantsRightPictures, DarkText } from '../../Profile/ProfileContent';


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
    // border: 1px solid red;
    width: 30%;
`;

const TitleResume = styled(MainContentTitles)`
    margin-left: 0;
`;

const TitleResumeWrapper = styled.div`
    display: flex;
    width: 76%;
    padding: 0;
    margin-left: 12%;
    height: 30px;
    // border: 1px solid green;
`;

const RightResumeWrapper = styled.div`
    // border: 1px solid blue;
    width: 40%;
    margin-left: 30%; 
    height: 25px;
    display: flex;
    border-radius: 5px;
`;

const PicturesResume = styled(InputImg)`
    height: 25px;
`;

const InputResume = styled(InputFilter)`
    width: 250px;
`;



export const MainContent: FC = () => {
    return (
        <MainConentWrapper>
            <HeaderPublications></HeaderPublications>
            <MainContentTitles>Workspace</MainContentTitles>
            <WorkSpace></WorkSpace>
            <TitleResumeWrapper>
                <TitleResume>Resume your work</TitleResume>
                <RightResumeWrapper>
                    <InputResume placeholder="Filter by title..."></InputResume>
                    <PicturesResume src="./media/icons/search.svg"/>
                    <CorrespondantsRightPictures src="../media/icons/people.svg"/>
                    <DarkText>Followed</DarkText>
                    
                </RightResumeWrapper>
            </TitleResumeWrapper>
            
            <Resume></Resume>

        </MainConentWrapper>
    );
};