import { FC, memo } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Container, CustomButton, IconStyler } from './index.styled';

interface IButtonProps {
  label: string
  icon: IconProp
}

const Button: FC<IButtonProps> = memo(({ label, icon }: IButtonProps) => (
  <Container>
    <CustomButton>
      <IconStyler icon={icon} />
      {label}
    </CustomButton>
  </Container>
));

export default Button;
