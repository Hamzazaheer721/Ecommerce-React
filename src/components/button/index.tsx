import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, memo } from 'react';
import { CustomButton } from './index.styled';

interface IButtonProps {
  label: string
  icon: any
}

const Button: FC<IButtonProps> = memo(({ label, icon }: IButtonProps) => (

  <CustomButton>
    <FontAwesomeIcon icon={icon} />
    {label}
  </CustomButton>

));

export default Button;
