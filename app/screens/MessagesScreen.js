import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/Lists/ListItem';
import ListItemDeleteAction from '../components/Lists/ListItemDeleteAction';
import ListSeparator from '../components/Lists/ListSeparator';
import SafeAreaScreen from '../screens/SafeAreScreen';

const MessagesScreen = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  const handleRefresh = () => {
    setMessages([
      {
        id: 1,
        sender: {
          name: 'Ahmed Kasu',
          image: require('../assets/Ahmed.jpg'),
        },
        message: 'Hi! is this still available?',
      },
      {
        id: 2,
        sender: {
          name: 'Beve Blasha',
          image: require('../assets/Ahmed.jpg'),
        },
        message: 'Hi! is this still available?',
      },
    ]);
  };

  return (
    <SafeAreaScreen>
      <FlatList
        data={messages}
        showsVerticalScrollIndicator={false}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.message}>
              <ListItem
                image={item.sender.image}
                title={item.sender.name}
                subTitle={item.message}
                onPress={() => console.log(item)}
                rightActions={() => (
                  <ListItemDeleteAction onPress={() => handleDelete(item)} />
                )}
              />
            </View>
          </View>
        )}
        ItemSeparatorComponent={ListSeparator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </SafeAreaScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
  },
});

export default MessagesScreen;
