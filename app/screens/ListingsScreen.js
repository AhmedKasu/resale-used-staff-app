import { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import CustomCard from '../components/CustomCard';
import Reload from '../api/components/Reload';
import routes from '../components/Navigation/routes';
import SafeAreaScreen from './SafeAreScreen';
import listingsApi from '../api/listings';

import useApi from '../hooks/useApi';

const ListingsScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const {
    data,
    error,
    loading,
    request: fetchListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <ActivityIndicator visible={loading} />
        <Reload visible={error} onPress={() => fetchListings()} />
        <FlatList
          data={data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <CustomCard
              image={item.images[0]}
              title={item.title}
              subTitle={`€${item.price}`}
              onPress={() =>
                navigation.navigate(routes.LISTING_DETAILS_SCREEN, item)
              }
            />
          )}
          showsVerticalScrollIndicator={false}
          refreshing={refreshing}
          onRefresh={() => fetchListings()}
        />
      </View>
    </SafeAreaScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default ListingsScreen;
