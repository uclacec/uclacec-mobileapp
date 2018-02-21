import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Event from '../components/singleevent.js';

var moment = require('moment');

export default class Events extends Component {

  // convert date from ISO
  get_formatted_date(date) {
    var d = moment(date);
    return d.isValid() ? d.format("MMM D, YYYY") : "";
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({item}) => (
          <Event
            event_type={item.event_type}
            title={item.title}
            date={this.get_formatted_date(item.date)}
            time={item.time}
            location={item.location}
            img={item.image}
            clickEventHandler={() => this.props.addEvent({
              event_type: item.event_type,
              title: item.title,
              date: item.date,
              location: item.location,
              image: item.image
            })}
            removeEventHandler={() => this.props.removeEvent({ title: item.title })}
          />
        )}
        keyExtractor={item => item.title}
      />
    );
  }
}
