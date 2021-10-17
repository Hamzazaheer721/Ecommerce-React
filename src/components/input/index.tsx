import { forwardRef, memo } from 'react';
import { InputField } from './index.styled';

interface InputProps {
  label?: string,
}

const Input = forwardRef<HTMLInputElement, InputProps>(memo(({ label }, ref) => (
  <InputField ref={ref} placeholder={label} />
)));

export default Input;
