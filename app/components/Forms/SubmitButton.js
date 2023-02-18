//import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import CustomButton from '../CustomButton';

const SubmitButton = ({ title, color, width }) => {
  const { handleSubmit, isValid, dirty } = useFormikContext();
  return (
    <>
      <CustomButton
        disabled={!isValid | !dirty}
        title={title}
        color={color}
        width={width}
        onPress={handleSubmit}
      />
    </>
  );
};

export default SubmitButton;
