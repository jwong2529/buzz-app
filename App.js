/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   center: {
//     alignItems: 'center',
//   },
// });

// const searchBar = search => {
//   // not implemented yet
// };

// const Chat = contact => {
//   return (
//     <View style={[{left: 20}]}>
//       <Text>img</Text>
//     </View>
//     <View style={styles.center}>
//       <Text>{contact}</Text>
//     </View>
//   );
// };

// const Greeting = props => {
//   return (
//     <View style={styles.center}>
//       <Text>Hello {props.name}!</Text>
//     </View>
//   );
// };

// const LotsOfGreetings = () => {
//   return (
//     <View style={[styles.center, {top: 50}]}>
//       <Greeting name="Rexxar" />
//       <Greeting name="Jaina" />
//       <Greeting name="Valeera" />
//     </View>
//   );
// };

// export default LotsOfGreetings;

// CHATGPT HERE
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  // State for search bar text and message threads
  const [searchText, setSearchText] = useState('');
  const [messageThreads, setMessageThreads] = useState([
    { id: '1', name: 'Friend 1', lastMessage: 'Hey, how are you?' },
    { id: '2', name: 'Friend 2', lastMessage: 'Good to see you!' },
    // Add more message threads as needed
  ]);

  // Function to render each item in the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToChat(item)}>
      <View style={styles.threadContainer}>
        <Text style={styles.threadName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  // Function to navigate to the chat screen for a selected thread
  const navigateToChat = (thread) => {
    // Add navigation logic to navigate to the chat screen with the selected thread
    console.log(`Navigating to chat with ${thread.name}`);
  };

  // Main component render
  return (
    <View style={styles.container}>
      {/* Search bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {/* List of message threads */}
      <FlatList
        data={messageThreads}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  threadContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  threadName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    color: 'gray',
  },
});

export default App;
