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
            eventHandler={
              this.props.addEvent ? () => this.props.addEvent({
                type: item.type,
                title: item.title,
                date: item.date,
                location: item.location,
                img: item.img
              })
              : () => this.props.removeEvent({
                title: item.title
              })
            }
            addOrDelete={ this.props.addEvent ? "+" : "x" }
          />
        )}
        keyExtractor={item => item.title}
      />
    );
  }
}
