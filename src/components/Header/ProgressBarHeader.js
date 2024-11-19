import React from 'react';
import ProgressBar from '../progressBar/ProgressBar';
import BackButton from '../buttons/BackBtn/BackBtn';
import backIcon from '../../assets/backBtn.svg';
import * as S from './ProgressBarHeader.styled';

const ProgressBarHeader = ({ currentStep, onBack }) => {
    return (
      <S.Header>
        <ProgressBar currentStep={currentStep} />
        <S.ButtonContainer>
          <BackButton onClick={onBack}>
            <img src={backIcon} alt="뒤로가기" />
          </BackButton>
        </S.ButtonContainer>
      </S.Header>
    );
  };
  
  

export default ProgressBarHeader;