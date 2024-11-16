import React from 'react';
import { StyledBackBtn } from './BackBtn.styled';

const BackBtn = ({ children, mobileBottom,pcBottom,tabletBottom,onClick, disabled }) => {
  return (
    <StyledBackBtn
      onClick={onClick}
      disabled={disabled}
      mobileBottom={mobileBottom}
      pcBottom={pcBottom}
      tabletBottom={tabletBottom}
    >
      {children}
    </StyledBackBtn>
   
  );
};

export default BackBtn;