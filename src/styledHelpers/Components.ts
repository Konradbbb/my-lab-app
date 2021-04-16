import styled from 'styled-components';
import { Colors } from './Colors';

export type Styles = {
    [ruleOrSelector: string]: string | number | Styles,
}

const boxShadow = (): Styles => {
    return {
        color: `${Colors.black}`
    };
};

export const Wrapper = styled.div`
    // background: grey;
    display: flex;
    justify-content: center;
    padding: 5px;
    box-shadow: 1px 1px 3px grey;

    ${boxShadow()};
`;