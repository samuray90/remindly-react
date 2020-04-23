import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 0 24px;
    border-radius: 20px;
    height: 40px;
    line-height: 40px;
    margin: 10px;
    justify-self: center;
    border: 0;
    background-color: blue;
    color: white;

    & > span:last-child {
        padding-left: 8px;
    }

    & > span:empty {
        /* display: none; */
    }
`
