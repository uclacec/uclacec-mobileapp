import React, { Component } from 'react';
import {
  StyleSheet,
  AsyncStorage,
  Text,
  View,
  Button,
  ActivityIndicator, 
  ListView
} from 'react-native';
import { connect } from "react-redux";
import { addEvent } from '../actions/index.js';

import Swiper from 'react-native-swiper';

import Events from '../containers/events.js';
import Header from '../components/header.js';

//import data from '../../data.json'    // would be from backend

class CECApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    };
  }

  componentDidMount() {
    return fetch('http://52.53.224.70/api/events.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            data: responseJson
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
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
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <Swiper
          showsButtons={false} loop={false} showsPagination={false} >
          <View style={{flex: 1}}> 
            <Header titleText="EVENTS" onClick={()=>this.toggleDrawer() }/>
            <Events
              data={this.state.data}
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
