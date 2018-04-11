import React, { Component } from 'react';
import {
  StyleSheet,
  AsyncStorage,
  Text,
  View,
  Button
} from 'react-native';
import { connect } from "react-redux";
import { addEvent } from '../actions/index.js';
import { removeEvent } from '../actions/index.js';

import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

import Events from '../containers/events.js';
import Header from '../components/header.js';

import SplashScreen from 'react-native-splash-screen';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class CECApp extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  toggleDrawer = () => {
        this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true
        });
  };

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper
          showsButtons={false} loop={false} showsPagination={false} >
          <View style={{flex: 1}}>
            <GestureRecognizer
              onSwipeRight={() => this.toggleDrawer()}>
              <Header titleText={this.props.visibility.filter} onClick={()=>this.toggleDrawer() }/>
              <Events
                data={this.props.visibility.events}
                addEvent={(event) => this.props.addEventClick(event)}
              />
            </GestureRecognizer>
          </View>
          <View style={{flex:1}}>
            <Header titleText="MY EVENTS" onClick={()=>{}} disabled={true}/>
            <Events
              data={this.props.myEvents}
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
    myEvents: state.myEvents,
    visibility: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEventClick: (event) => dispatch(addEvent(event)),
    deleteEventClick: (event) => dispatch(removeEvent(event)),
  }
}

export default CECApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CECApp);
