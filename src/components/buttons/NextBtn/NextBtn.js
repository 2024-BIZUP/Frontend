import React from 'react';
import { StyledNextBtn } from './NextBtn.styled';

const NextBtn = ({ children, variant = 'primary', mobileBottom,pcBottom,tabletBottom,onClick, disabled, type = 'button' }) => {
  return (
    <StyledNextBtn
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      mobileBottom={mobileBottom}
      pcBottom={pcBottom}
      tabletBottom={tabletBottom}
      type={type}
    >
      {children}
    </StyledNextBtn>
  );
};

export default NextBtn;