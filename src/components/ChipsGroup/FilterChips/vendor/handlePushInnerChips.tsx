// eslint-disable-next-line import/named
import { getCountSelectedChips } from './getCountSelectedChips';

interface Props {
  chipsData: any,
  setisClearBtn: Function,
  isClearBtn: boolean,
  setIsCounter: Function,
}

export const handlePushInnerChips = (props: Props): void => {
  const { chipsData, setisClearBtn, isClearBtn, setIsCounter } = props;

  setisClearBtn(!isClearBtn);

  Object.assign(chipsData, { action: 'selected' });

  const count = getCountSelectedChips(chipsData.inner); // кол-во выбранных
  setIsCounter(count);
};
