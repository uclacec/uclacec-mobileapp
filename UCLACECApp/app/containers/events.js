import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Event from '../components/singleevent.js';
import data from '../../data.json'

export default class Events extends Component {
  render() {
    return (
      <FlatList
        data={data.events} // would be from backend, not dummy data
        renderItem={({item}) => (
          <Event
            type={item.type}
            title={item.title}
            date={item.date}
            location={item.location}
            img={item.img}
            addEventHandler={() => this.props.addEvent({
              type: item.type,
              title: item.title,
              date: item.date,
              location: item.location,
              img: item.img
            })}
          />
        )}
        keyExtractor={item => item.title}
      />
    );
  }
}
