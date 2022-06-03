import { getCountSelectedChips } from "./getCountSelectedChips";

interface Props {
  itemChip: any,
  chipsData: any,
  setIsOpenPuller: Function,
}

export const handlePushParentChips = (props: Props): void => {
  const { chipsData, itemChip, setIsOpenPuller } = props;

  Object.assign(itemChip, {
    action: 'active',
  });

  // Проверка наличия ключа Inner
  // eslint-disable-next-line no-prototype-builtins
  const isKeyInner = itemChip.hasOwnProperty('inner');

  // Запуск функции чтения внутренних чипсов и записи в его в группу
  const arr: any[] = [];
  if (isKeyInner) {
    itemChip.inner.map((el: any) => {
      arr.push(el);
      Object.assign(chipsData, { inner: arr }); // клонируем массив и вставка
      const count = getCountSelectedChips(arr); // кол-во выбранных
      if (count !== 0) Object.assign(itemChip, { count}); // вставка кол-ва выбранных
    });
  }

  const countChipsSelected = (
    arr?.filter((el: { action: string }) => el.action === 'selected')
    .map((acc: [], i: number) => i)
  )?.length;

  // Смена текста Главного чипса

  Object.assign(itemChip, {
    label: `Select ${countChipsSelected} choice`,
    count: countChipsSelected
  });
  console.log("🚀 ~ file: FilterChipsItem.tsx ~ line 49 ~ handleActiveParentChips ~ countChipsSelected", countChipsSelected)

  setIsOpenPuller(true);
};
