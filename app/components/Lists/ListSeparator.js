import { View, StyleSheet } from 'react-native';

import colors from '../../config/colors';

const ListSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: colors.light,
  },
});

export default ListSeparator;
