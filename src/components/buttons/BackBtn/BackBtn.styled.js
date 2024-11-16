import styled, { css } from 'styled-components';

export const StyledBackBtn = styled.button`
    display: flex;
    width: 40px;
    height: 40px;
    padding: 8px;
    left: 24px;
    position:absolute;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 32px;
    border: none;
    background: #var(--Foundation-Neutral-grey-2, #FDFDFD);
    box-shadow: 0px 4px 12px 0px rgba(41, 37, 38, 0.10);



    
    img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    }
`
