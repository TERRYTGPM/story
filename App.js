import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Write from "./screens/write";
import Read from "./screens/read";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppContainer></AppContainer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Navigator = createBottomTabNavigator({
  Read: {screen: Read},
  Write: {screen: Write}
})
const AppContainer = createAppContainer(Navigator); 