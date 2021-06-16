import { FC } from 'react';
import styled from 'styled-components';
import { EntitiesTopOne } from './EntitiesTopComponent'
import { EntitiesContent } from './EntitiesContent';


const EntitiesContainer = styled.div`
    width:80%;
    margin-left:150px;
    background-color:white;
`;


export const Entities: FC = () => {
    return (
            <EntitiesContainer>
                <EntitiesTopOne/>
                <EntitiesContent/>
            </EntitiesContainer>
        )
   
};