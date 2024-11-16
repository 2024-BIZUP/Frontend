import React from 'react';
import {ProgressBarContainer, Progress} from './ProgressBar.styled';

const ProgressBar = ({ currentStep }) => {
    return (
      <ProgressBarContainer>
        <Progress step={currentStep} />
      </ProgressBarContainer>
    );
  };
  
export default ProgressBar;