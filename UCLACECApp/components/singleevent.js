import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';

export default class Event extends Component {
  render() {
    return (
      <ImageBackground source={this.props.img} style={styles.image} >
        <View style={styles.container}>
          <Text style={styles.titleText}>{this.props.title}</Text>
          <Text style={styles.detailsText}>{this.props.date}</Text>
          <Text style={styles.detailsText}>{this.props.location}</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 400
  },
  container: {
    padding: 15,
    justifyContent: 'flex-end',
    height: 150
  },
  titleText: {
    color: '#F3CA25',
    fontSize: 30,
    fontFamily: 'RobotoCondensed-BoldItalic'
  },
  detailsText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'RobotoCondensed-Regular'
  }
});
