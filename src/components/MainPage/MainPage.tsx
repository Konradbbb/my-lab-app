import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Colors } from '../../styledHelpers/Colors';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';
import { Entities } from '../../RoutingComponents/Entities';
import { Ecosystem } from '../../RoutingComponents/Ecosystem';
import { Publications } from '../../RoutingComponents/Publications';
import { People } from '../../RoutingComponents/People';
import { Administration } from '../../RoutingComponents/Administration';
import { YourPublications } from '../../RoutingComponents/YourPublications';
import { Network } from '../../RoutingComponents/Network';
import { MyProfile } from '../../RoutingComponents/MyProfile';
import { MainContent } from '../MainConent/MainContent';



const MainWrapper = styled.div`
    height: 1500px;
    width: 100%;
    padding-top: 10px;
    // border: 1px solid black;
    background: ${Colors.erty};
    // background: navy;
    margin: 0;
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
        <Router>
            <MainWrapper>
                <TopBar />
                <Conent>

                    <LeftMenu />

                    <ContetBoxes>

                        <Switch>
                            <Route path="/entities" exact>
                                <Entities />
                            </Route>

                            <Route path="/ecosystem" exact>
                                <Ecosystem />
                            </Route>

                            <Route path="/publications" exact>
                                <Publications />
                            </Route>

                            <Route path="/people" exact>
                                <People />
                            </Route>

                            <Route path="/administration" exact>
                                <Administration/>
                            </Route>

                            <Route path="/home" exact>
                                <MainContent />
                            </Route>

                            <Route path="/" exact>
                                <MainContent />
                            </Route>

                            <Route path='/your_publications' exact>
                                <YourPublications/>
                            </Route>

                            <Route path='/network' exact>
                                <Network/>
                            </Route>

                            <Route path='/my_profile' exact>
                                <MyProfile/>
                            </Route>
                        </Switch>
                       
                    </ContetBoxes> 
                </Conent>
            </MainWrapper>
        </Router>
            
        );           
    };

    export default MainPage;