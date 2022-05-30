export type ChipsContentProps = {
  text?: string,
  checked?: boolean,
  isFilter?: boolean,
  isSelect?: boolean,
  setIsSelect?: Function,
  isClearBtn?: boolean,
  setIsClearBtn?: Function,
  isInnerChips?: boolean,
};

export type ChipsProps = {
  text?: string,
  checked?: boolean,
  isFilter?: boolean,
  isSelect?: boolean,
  setIsSelect?: Function,
  setIsOpenPuller: Function,
  isClearBtn?: boolean,
  setIsClearBtn?: Function,
  getChipsAction: Function,
  isInnerChips?: boolean,
  data?: any,
  chipsData: any[],
  chipsParent?: any,
};
