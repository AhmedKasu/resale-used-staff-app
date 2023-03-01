import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ImageInput = ({ imageUri, onChangeImage }) => {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setGranted(granted);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4.5],
        quality: 0.5,
      });

      const { fileName: name, type, uri } = result;

      if (!result.cancelled)
        onChangeImage({
          name: name ? name : uri.substring(uri.lenght / 3),
          type,
          uri,
        });
    } catch (error) {
      console.log('error :', error);
      alert('error accessing library');
    }
  };

  const handlePress = () => {
    if (!granted)
      alert('you need to enable permission to access your photos library');

    if (granted && !imageUri) selectImage();

    if (imageUri)
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Delete', onPress: () => onChangeImage(imageUri) },
        { text: 'Cancel', style: 'cancel' },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}

        {!imageUri && (
          <View>
            <MaterialCommunityIcons
              name='camera'
              color={colors.medium}
              size={45}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    margin: 7,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%' },
});
export default ImageInput;
