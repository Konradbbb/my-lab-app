import { FC } from 'react';

import { HeaderWrapper } from '../components/MainConent/HeaderPublications/HeaderPublications';
import { Colors } from '../styledHelpers/Colors';
import styled from 'styled-components';
import { ProfilHeader } from './ProfilHeader';
import { ProfileContent } from './ProfileContent';

const MyProfilMain = styled(HeaderWrapper)`
    height: 1300px;
    box-shadow: 0 0 0 0;
    border: 1px solid red;
    background: ${Colors.erty};
    display: block;
`;



export const MyProfile: FC = () => {


    return (
       <MyProfilMain>
           <ProfilHeader></ProfilHeader>
           <ProfileContent></ProfileContent>
       </MyProfilMain>

    );
};