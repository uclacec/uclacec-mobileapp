import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}> Events </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-end',
    padding: 10,
    height: 60,
    backgroundColor: '#F3CA25',
  },
  text: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 25
  }
});
