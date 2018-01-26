import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Event from '../components/singleevent.js';

export default class MyEvents extends Component {
  render() {
    return (
      <FlatList
        data={this.props.myEvents.myEvents}
        renderItem={({item}) => (
          <Event
            type={item.type}
            title={item.title}
            date={item.date}
            location={item.location}
            img={item.img}
          />
        )}
        keyExtractor={item => item.title}
      />
    );
  }
}
