import React from 'react';
import Icomoon from 'react-native-icomoon';
import prodicon from './glyfmaps/prodicon.json';

interface IconProps {
  name: string,
  color?: string,
  size?: number,
}

export const ProdIcon = ({ name, color, size }: IconProps): React.ReactElement => (
  <Icomoon iconSet={prodicon} name={name} color={color} size={size} />
);
