import React from 'react';
import { ProductInputWrapper, Label, StyledProductInput } from './ProductInput.styled';

const ProductInput = ({ label, value, onChange, placeholder, type = "text" }) => {
  return (
    <ProductInputWrapper>
      {label && <Label>{label}</Label>}
      <StyledProductInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </ProductInputWrapper>
  );
};

export default ProductInput;