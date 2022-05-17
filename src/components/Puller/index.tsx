import * as React from 'react';

import { SwipeablePanel } from 'rn-swipeable-panel';

interface SwipeablePanelProps {
  isOpen: boolean,
  setIsOpen: Function,
  setIsClose?: Function,
  isClose?: boolean,
  children: React.ReactFragment,
  showCloseButton?: boolean,
}

export const Puller = (props: SwipeablePanelProps): React.ReactElement => {
  const { isOpen, setIsOpen, children, showCloseButton, isClose, setIsClose } = props;
  const panelProps = {
    fullWidth: true,
    openLarge: false,
    noBar: true,
    closeOnTouchOutside: true,
    showCloseButton,
    onlySmall: true,
    style: { backgroundColor: '#ffffff', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 16 },
    closeIconStyle: { backgroundColor: '#7D838A' },
    closeRootStyle: { backgroundColor: 'transparent', top: 8.5 },

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    onClose: () => closePanel(),
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    onPressCloseButton: () => closePanel(),
  };
  const [isPanelActive, setIsPanelActive] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) setIsPanelActive(true);
  }, [isOpen]);

  const closePanel = (): void => {
    setIsPanelActive(false);
    setIsOpen(false);
  };

  React.useEffect(() => {
    setIsPanelActive(false);
    setIsOpen(false);
    if (setIsClose) setIsClose(false);
  }, [isClose, setIsClose, setIsOpen]);

  return (
    <SwipeablePanel {...panelProps} isActive={isPanelActive}>
      {children}
    </SwipeablePanel>
  );
};
