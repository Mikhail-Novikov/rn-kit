export const theme = {
  malachite_02: '#107F8C',
  white: '#ffffff',
  darkGray: '#333333',
  asphalt_01: '#7D838A',
  asphalt_02: '#B2B8BF',
  asphalt_04: '#E4E8EB',
  asphalt_05: '#F2F4F7',
  graphite_01: '#1F1F22',

  gray: '#D0D7DD',
};

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
