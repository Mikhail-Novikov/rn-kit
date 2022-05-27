export type ChipsContentProps = {
  text?: string,
  checked?: boolean,
  isFilter?: boolean,
  isSelect?: boolean,
  setIsSelect?: Function,
  isReset?: boolean,
  setIsReset?: Function,
  isInnerChips?: boolean,
};

export type ChipsProps = {
  text?: string,
  checked?: boolean,
  isFilter?: boolean,
  isSelect?: boolean,
  setIsSelect?: Function,
  setIsOpenPuller: Function,
  isReset?: boolean,
  setIsReset?: Function,
  getChipsAction: Function,
  isInnerChips?: boolean,
  data?: any,
  chipsData: any[],
  chipsParent?: any,
};
