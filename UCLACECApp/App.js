import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import Events from './components/events.js';
import Header from './components/header.js';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Swiper showsButtons={false}>
          <View style={{flex: 1}}>
            <Header />
            <Events />
          </View>
          <View>
            <Text>hi</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
}
