import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const isExpired = (value) => {
  const maxTime = 5;

  const now = moment(Date.now());
  const valueTimeStamp = moment(value.timeStamp);

  return now.diff(valueTimeStamp, 'minutes') > maxTime;
};

const storeData = async (key, value) => {
  const item = {
    value,
    timeStamp: Date.now(),
  };

  try {
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const item = JSON.parse(jsonValue);
    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (e) {
    console.log(e);
  }
};

export default { storeData, getData };
