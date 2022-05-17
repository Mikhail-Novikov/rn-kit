import { StyleSheet } from 'react-native';

export const stylesBadge = (color: string | undefined): any => StyleSheet.create({
  badge: {
    marginLeft: 8,
    backgroundColor:
      (color === 'success' && '#107F8C') ||
      (color === 'warning' && '#FF9900') ||
      (color === 'danger' && '#C11030') ||
      '#E4E8EB',
    height: 24,
    width: 33,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: (color !== 'default' && '#ffffff') || '#1F1F22',
    fontSize: 14,
  },
});
