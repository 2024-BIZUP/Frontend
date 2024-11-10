import React from 'react';
import {
  RadioGroupWrapper,
  RadioLabel,
  HiddenRadio,
  StyledRadio
} from './RadioGroup.styled';

const RadioGroup = ({ options, value, onChange, name }) => {
  return (
    <RadioGroupWrapper>
      {options.map((option) => (
        <RadioLabel key={option.value}>
          <HiddenRadio
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
          <StyledRadio checked={value === option.value}>
            {option.label}
          </StyledRadio>
        </RadioLabel>
      ))}
    </RadioGroupWrapper>
  );
};

export default RadioGroup;