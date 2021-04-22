import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Colors } from '../../styledHelpers/Colors';

const MainWrapper = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid black;
    background: #FAFDFF;
`;

const Conent = styled.div`
    max-width: 100%;
    height: 900px;
    // align-items: center;
    display: flex;
    // border: 1px solid grey;
    `;

const ContetBoxes = styled.div`
    // border: 1px solid red;
    width: 100%;
    height: 850px;
    margin: 14px 25px 14px 0;
    padding: 10px;
    padding-top: 0;

`;

const MiniBoxes = styled.div`
    // border: 1px solid purple;
    background: ${Colors.white};
    width: 98%;
    height: 250px;
    margin: 15px;
    margin-top: 0;
    box-shadow: 1px 1px 2px grey;
    border-radius: 4px;
    // background: purple;
`;


     const MainPage: FC = () => {
        return (
            <MainWrapper>
                <TopBar />
                <Conent>
                    <LeftMenu />
                    <ContetBoxes>
                        <MiniBoxes/>
                        <MiniBoxes/>
                        <MiniBoxes/>
                    </ContetBoxes>
                   
                </Conent>
            </MainWrapper>
        );           
    };

    export default MainPage;