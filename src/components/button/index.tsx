import { FC, memo } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  CustomButton, IconStyler
} from './index.styled';

interface IButtonProps {
  label: string
  icon: IconProp
}

const Button: FC<IButtonProps> = memo(({ label, icon }: IButtonProps) => (
  <CustomButton>
    <IconStyler icon={icon} />
    {label}
  </CustomButton>
));

export default Button;
