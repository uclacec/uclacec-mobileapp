import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Event from '../components/singleevent.js';

export default class Events extends Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({item}) => (
          <Event
            type={item.type}
            title={item.title}
            date={item.date}
            location={item.location}
            img={item.img}
            clickEventHandler={() => this.props.addEvent({
              type: item.type,
              title: item.title,
              date: item.date,
              location: item.location,
              img: item.img
            })}
            removeEventHandler={() => this.props.removeEvent({ title: item.title })}
          />
        )}
        keyExtractor={item => item.title}
      />
    );
  }
}
