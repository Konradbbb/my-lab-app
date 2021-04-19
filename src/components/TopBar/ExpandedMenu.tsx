import { FC } from 'react';
import styled from 'styled-components';
 

const ExpandedWrapperMenu = styled.div`
    position: absolute;
    width: 100%;
    height: 800%;
    margin-left: -0.47%;
    background: white;
    top: 100%;
    border: 1px solid grey;
    border-radius: 2px;
`;

const ExtendedMenuInput = styled.input`
    width: 90%;
    margin: 5%;
    margin-left: 3%;

    &:hover {
        outline: none;
    }
    &:focus {
        outline: none;
    }
`;

const ExtendedMenuList = styled.li`
    
`;

export const ExpandedMenu: FC = () => {
    return (
        <ExpandedWrapperMenu>
            <ul>
                <ExtendedMenuInput placeholder="Filter..."/>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
            </ul>
        </ExpandedWrapperMenu>
    );
};