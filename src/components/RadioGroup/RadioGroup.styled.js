import React from 'react';
import styled from 'styled-components';

const RadioGroupWrapper = styled.div`
  display: flex;
  display-directon: row;
  gap: 1rem;
`;

const RadioLabel = styled.label`
  position: relative;
  cursor: pointer;
 
`;

const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledRadio = styled.span`
  width: 60px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  transition: all 0.2s ease;
  margin: 16px 0 8px 0;
  background-color: ${props => props.checked ? '#70614C' : '#F1F2F4'};
  color: ${props => props.checked ? 'white' : '#000'};

  &:hover {
    background-color: ${props => props.checked ? '#70614C' : '#F1F2F4'};
  }
`;

export {
  RadioGroupWrapper,
  RadioLabel,
  HiddenRadio,
  StyledRadio
};