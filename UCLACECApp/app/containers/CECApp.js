import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
import Events from './events.js';
import Header from '../components/header.js';

export default class CECApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          showsButtons={false} loop={false} showsPagination={false} >
          <View style={{flex: 1}}>
            <Header titleText="EVENTS"/>
            <Events />
          </View>
          <View>
            <Header titleText="MY EVENTS" />
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
