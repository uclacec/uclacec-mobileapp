import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';
import { connect } from "react-redux";
import { addEvent } from '../actions/index.js';

import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

import Events from './events.js';
import Header from '../components/header.js';

import data from '../../data.json'    // would be from backend

class CECApp extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper
          showsButtons={false} loop={false} showsPagination={false} >
          <View style={{flex: 1}}>
            <Header titleText="EVENTS"/>
            <Events
              data={data.events}
              addEvent={(event) => this.props.addEventClick(event)}
            />
          </View>
          <View >
            <Header titleText="MY EVENTS" />
            <Events
              data={this.props.events.myEvents}
              removeEvent={(event) => this.props.deleteEventClick(event)}
            />
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
    addEventClick: (event) => dispatch(addEvent(event)),
    deleteEventClick: (event) => dispatch(removeEvent(event))
  }
}

export default CECApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CECApp);
