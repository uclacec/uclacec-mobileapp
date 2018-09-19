import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import { addEvent } from '../actions/index.js';
import { removeEvent } from '../actions/index.js';

import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

import Events from '../containers/events.js';
import Header from '../components/header.js';
import Loading from '../screens/Loading';

class CECApp extends Component {

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });
  };

  static navigatorStyle = { navBarHidden: true };

  render() {
    var events;
    var myEvents = [];
    if (this.props.events.length !== 0) {
      // Add "inMyEvents" key for each item
      this.props.events.map(e => Object.assign(e, { inMyEvents: this.props.myEvents.includes(e._id) }));

      // Filter events for main screen
      if (this.props.filter === "EVENTS") {
        events = this.props.events;
      }
      else {
        events = this.props.events.filter((event) => (
          event.event_type === this.props.filter.toLowerCase()
        ));
      }

      // Filter events for My Events
      this.props.myEvents.forEach((item) => {
        var myEvent = this.props.events.find(event => event._id === item);
        myEvents.push(myEvent);
      });
    }

    return (
      <View style={{flex: 1}}>
        <Loading mounted={!this.props.loaded}/>
        <Swiper
          showsButtons={false} loop={false} showsPagination={false} >
          <View style={{flex: 1}}>
            <Header canFilter="true" titleText={this.props.filter} onClick={() => this.toggleDrawer()}/>
            <Events
              data={events}
              myEvents={this.props.myEvents}
              addEvent={(event) => this.props.addEventClick(event)}
            />
          </View>
          <View style={{flex:1}}>
            <Header canFilter="false" titleText="MY EVENTS" onClick={() => {}} disabled={true}/>
            <Events
              data={myEvents}
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
    events: state.events,
    filter: state.visibilityFilter,
    myEvents: state.myEvents,
    loaded: state.loadEvents.imagesLoaded.allLoaded,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEventClick: (event) => dispatch(addEvent(event)),
    deleteEventClick: (event) => dispatch(removeEvent(event))
  };
};

export default CECApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CECApp);
