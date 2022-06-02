export const getCountSelectedChips = 
  (arr: any[]) => arr?.filter((el: { action: string }) => el.action === 'selected')
  .map((acc: [], i: number) => i).length;

