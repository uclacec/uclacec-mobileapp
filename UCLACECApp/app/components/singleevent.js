import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';
import AddButton from './addbutton.js';

export default class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let accentColor;
    if (this.props.type === 'CONCERTS') {
      accentColor = '#FF664D'
    } else if (this.props.type === 'SPEAKERS') {
      accentColor = '#CE4EC8'
    } else {
      accentColor = '#FFA49F'
    }

    return (
      <ImageBackground source={{"uri": this.props.img.uri}} style={styles.image} >
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{this.props.title}</Text>
            <Text style={styles.detailsText}>{this.props.date}</Text>
            <Text style={styles.detailsText}>{this.props.location}</Text>
          </View>
          <AddButton
            addOrDelete={this.props.addOrDelete}
            handleOnClick={this.props.eventHandler}
            type={this.props.type}/>
          <View style={{flexDirection: 'column'}}>
            <View style={[styles.sideAccent, {backgroundColor: accentColor}]} ></View>
            <View style={[styles.sideAccentCorner, {borderTopColor: accentColor}]}></View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 148,
    width: 400
  },
  container: {
    flexDirection: 'row',
    height: 148,
    width: 375
  },
  textContainer: {
    padding: 15,
    justifyContent: 'flex-end',
    height: 150,
    width: 366
  },
  titleText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'GTPressuraMonoTrial-Bold'
  },
  detailsText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'GTPressuraMonoTrial-Regular'
  },
  sideAccent: {
    height: 138,
    width: 10,
  },
  sideAccentCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderRightColor: 'transparent',
    transform: [
     {rotate: '90deg'}
   ]
  }
});
