import { Text } from 'react-native';

import defaultStyles from '../config/styles';

const CustomText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default CustomText;
