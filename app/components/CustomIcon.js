import { View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const CustomIcon = ({
  name,
  color = 'black',
  iconColor = 'white',
  size = 40,
}) => {
  const iconWrapper = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={[iconWrapper, { backgroundColor: color }]}>
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
};

export default CustomIcon;
