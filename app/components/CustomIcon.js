import { View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const CustomIcon = ({ name, color = 'black', size = 40 }) => {
  const iconWrapper = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={[iconWrapper, { backgroundColor: colors[color] }]}>
      <MaterialIcons name={name} size={size * 0.5} color={'white'} />
    </View>
  );
};

export default CustomIcon;
