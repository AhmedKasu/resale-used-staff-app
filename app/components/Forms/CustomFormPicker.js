import { useFormikContext } from 'formik';

import CustomPicker from '../CustomPicker';
import ErrorMessage from './ErrorMessage';

const CustomFormPicker = ({
  icon,
  placeholder,
  items,
  numberOfCulumns,
  PickerItemComponent,
  name,
  width,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <CustomPicker
        icon={icon}
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        numberOfCulumns={numberOfCulumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        width={width}
      />
      <ErrorMessage touched={touched[name]} error={errors[name]} />
    </>
  );
};

export default CustomFormPicker;
