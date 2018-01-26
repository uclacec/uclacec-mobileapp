import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { connect } from "react-redux";
import { addEvent } from '../actions/index.js';

import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

import Events from './events.js';
import MyEvents from './myevents.js';
import Header from '../components/header.js';

class CECApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper
          showsButtons={false} loop={false} showsPagination={false} >
          <View style={{flex: 1}}>
            <Header titleText="EVENTS"/>
            <Events addEvent={(event) => this.props.addEventClick(event)} />
          </View>
          <View >
            <Header titleText="MY EVENTS" />
            <MyEvents myEvents={this.props.events} />
          </View>
        </Swiper>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEventClick: (event) => dispatch(addEvent(event))
  }
}

export default CECApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CECApp);
