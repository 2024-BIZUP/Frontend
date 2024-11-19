import React from 'react';
import { ProgressBarContainer, StepBar } from './ProgressBar.styled';

const ProgressBar = ({ currentStep }) => {
  return (
    <ProgressBarContainer>
      {[1, 2, 3, 4, 5].map(step => (
        <StepBar key={step} active={step < currentStep} />
      ))}
    </ProgressBarContainer>
  );
};

export default ProgressBar;