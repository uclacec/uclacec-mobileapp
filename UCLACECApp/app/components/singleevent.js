import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AddButton from './addbutton.js';
import ModalView from './modalview.js';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
let moment = require('moment');

const IPHONE_X_HEIGHT = 812;

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: Dimensions.get('window').height,
      visibleModal: null,
    };
    this.containerHeight = this.state.height === IPHONE_X_HEIGHT ? 180 : 148;
    this.infoBoxHeight = this.state.height === IPHONE_X_HEIGHT ? 55 : 50;
  }

  render() {

    let accentColor;
    if (this.props.type === 'concerts') {
      accentColor = '#FF664D'
    } else if (this.props.type === 'speakers') {
      accentColor = '#CE4EC8'
    } else if (this.props.type === 'films') {
      accentColor = '#FFA49F'
    }
    else {
      accentColor = '#FFBE06'
    }

    const url = "http://uclacec.com" + this.props.image.url;   // set url

    // format date
    formatDate = moment.utc(new Date(this.props.date.toString()).toUTCString())
      .format("ddd, MMMM Do") + ' - ' +  this.props.time;

    let title;
    title = this.props.title.length > 25
      ? this.props.title.slice(0, 22) + '...'
      : this.props.title;

    return (
      <View>
        <TouchableOpacity
          onPress={ () => this.setState({ visibleModal: 1 })}
        >
          <ImageBackground onLoad={this.props.imageLoaded}
                           source={{"uri": url}}
                           style={{height: this.containerHeight}} >
            <View style={[styles.container, {height: this.containerHeight}]}>
                <LinearGradient
                  colors={['white', 'rgba(255, 255, 255, 0.75)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.25)', 'rgba(0, 0, 0, 0)']}
                  start={{x: 0.5}} end={{x: 1}}
                  locations={[0.5,0.6,0.7,0.8,1]}
                  style={[styles.linearGradient, {height: this.infoBoxHeight}]}>
                  <Text style={styles.titleText}>{title}</Text>
                  <Text style={styles.detailsText}>{formatDate}</Text>
                </LinearGradient>
              <AddButton
                disable={this.props.disable}
                addOrDelete={this.props.addOrDelete}
                handleOnClick={this.props.eventHandler}
                type={this.props.type}/>
              <View style={[styles.sideContainer, {height: this.containerHeight}]}>
                  <View style={[styles.sideAccent, {backgroundColor: accentColor}, {height: this.containerHeight - 10}]} ></View>
                  <View style={[styles.sideAccentCorner, {borderTopColor: accentColor}]}></View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <Modal isVisible={this.state.visibleModal === 1}>
            <ModalView
              title = {this.props.title}
              location = {this.props.location}
              type={this.props.type}
              description = {this.props.description}
              fblink = {this.props.fblink}
              trailerlink = {this.props.trailerlink}
              onClick={() => this.setState({ visibleModal: null })}
            />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailsText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Bebas Neue'
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Bebas Neue'
  },
  sideContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 10,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end'
  },
  sideAccent: {
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
  },
  linearGradient: {
    padding: 4,
    justifyContent: 'flex-start',
    width: 250,
    paddingLeft: 14
  }
});
