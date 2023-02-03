import { Text } from 'react-native';

import defaultStyles from '../config/styles';

const CustomText = ({ children, style }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default CustomText;
