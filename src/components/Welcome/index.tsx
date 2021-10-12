import { FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as bankActions from '../../redux/actions/bankActions'
import { State } from '../../redux/reducers';
import { Container, WelcomeText } from './index.styled';

const WelcomeComponent: FC<{}> = memo(() => {
  const dispatch = useDispatch();
  const { bank } = useSelector((state: State) => state)
  const { depositMoney, withdrawMoney, bankupt } = bindActionCreators(bankActions, dispatch)
  return (
    <Container>
      <WelcomeText>
        {bank}
      </WelcomeText>
      <button type="button" onClick={() => depositMoney(1000)}>
        Deposit
      </button>
      <br />
      <button type="button" onClick={() => withdrawMoney(1000)}>
        Withdraw
      </button>
      <br />
      <button type="button" onClick={() => bankupt()}>
        Bankrupt
      </button>
    </Container>
  )
});

export default WelcomeComponent;
