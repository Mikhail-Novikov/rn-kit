import React from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { FilterChipsView } from './FilterChipsView';
import { ChipsProps } from '../models/Chips';
import { getCountSelectedChips } from './vendor/getCountSelectedChips';

export const FilterChipsItem = (props: ChipsProps): React.ReactElement => {
  const {
    isFilter, text, checked, setIsOpenPuller, isInnerChips, data, chipsData, getChipsAction, setInnerChips, dispatch,
  } = props;
  const [isClearBtn, setisClearBtn] = React.useState<boolean | undefined>(false);
  const [isSelect, setIsSelect] = React.useState<boolean | undefined>(false);
  const [counter, setIsCounter] = React.useState<number>();

  React.useEffect(() => {

    const { inner }: any= chipsData;
    // Подсчёт кол-ва чекнутых чипсов панели
    const count = getCountSelectedChips(inner);

    // Добавление счётчика
    Object.assign(chipsData, { count });
    setIsCounter(count);
  });


  // Добавление признака для Главного чипса
  const handleActiveParentChips = (): void => {
    Object.assign(data, {
      action: 'active',
    });

    // Проверка наличия ключа Inner
    // eslint-disable-next-line no-prototype-builtins
    const isKeyInner = data.hasOwnProperty('inner');
    console.log('🚀 ~ file: FilterChipsItem.tsx ~ line 59 ~ isKeyInner', isKeyInner);

    // Запуск функции чтения внутренних чипсов и записи в его в группу
    const arr: any[] = [];
    if (isKeyInner) {
      data.inner.map((el: any) => {
        arr.push(el);
        Object.assign(chipsData, { inner: arr });
        const count = getCountSelectedChips(arr);
        Object.assign(data, { count});
      });
    }

    const countChipsSelected = (
      arr?.filter((el: { action: string }) => el.action === 'selected')
      .map((acc: [], i: number) => i)
    )?.length;


    // Смена текста Главного чипса


    Object.assign(data, {
      label: `Select ${countChipsSelected} choice`,
    });

    setIsOpenPuller(true);
  };

  const handleSelectedInnerChips = (): void => {
    const { inner }: any= chipsData;

    setisClearBtn(!isClearBtn);

    Object.assign(data, { action: 'selected' });

    // Подсчёт кол-ва чекнутых чипсов панели
    // const countChipsSelected = (
    //   inner.filter((el: { action: string }) => el.action === 'selected')
    //   .map((acc: [], i: number) => i)
    // )?.length;

    // Добавление счётчика
    // Object.assign(chipsData, { count: countChipsSelected });

    // Смена текста Главного чипса
    // chipsData.map((el: { action: string }): React.ReactNode => {
    //   if (el.action === 'active' && countChipsSelected !== undefined) {
    //     Object.assign(el, {
    //       label: `Select ${countChipsSelected} choice`,
    //     });
    //   }
    //   return null;
    // });
  };

  // Если актион в статусе selected изменить стейт isClearBtn
  React.useEffect(() => {
    if (data.action === 'selected') {
      setIsSelect(true);
      setisClearBtn(true);
    }
  }, [data.action]);

  return isFilter || isInnerChips ? (
    <TouchableOpacity
      onPress={event => (!isInnerChips ? handleActiveParentChips() : handleSelectedInnerChips())}
    >
      <FilterChipsView
        text={text}
        isFilter={isFilter}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
        checked={checked}
        isClearBtn={isClearBtn}
      />
    </TouchableOpacity>
  ) : (
    <View>
      <FilterChipsView
        text={text}
        isFilter={isFilter}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
        checked={checked}
        isClearBtn={isClearBtn}
      />
    </View>
  );
};
