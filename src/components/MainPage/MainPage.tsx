import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

const Wrapper = styled.div`
`;

const Conent = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
    `;

     const MainPage: FC = () => {
        return (
            <Wrapper>
                <TopBar />
                <Conent>
                    <LeftMenu />
                    <div>content</div>
                </Conent>
            </Wrapper>
        );           
    };

    export default MainPage;