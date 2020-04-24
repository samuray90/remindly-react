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
    position: relative;
    overflow: hidden;
    cursor: pointer;
    
    &::after {
        color: blue;
        background-color: white;
        content: '${({ label }) => label}';
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 100ms;
    }

    &:hover::after {
        ${( {label} ) => label ? 'top: 0;' : ''}
    }


    & > span:last-child {
        padding-left: 8px;
    }

`
