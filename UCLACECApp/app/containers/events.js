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
        extraData={this.props.myEvents}
        renderItem={({item}) => (
          <Event
            id={item._id}
            type={item.event_type}
            title={item.title}
            description={item.description}
            date={item.date}
            location={item.location}
            image={item.image}
            fblink={item.fb_link}
            trailerlink={item.trailer}
            disable={
              this.props.addEvent
              ? item.inMyEvents
              : false
            }
            eventHandler={
              this.props.addEvent
              ? () => this.props.addEvent(item._id)
              : () => this.props.removeEvent(item._id)
            }
            addOrDelete={ this.props.addEvent
              ? item.inMyEvents
                ? "✓"
                : "+"
              : "x"
            }
          />
        )}
        keyExtractor={item => item._id}
      />
    );
  }
}
