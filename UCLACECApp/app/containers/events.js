import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Event from '../components/singleevent.js';

const data = [
  {type: 'CONCERTS', title: 'VULFPECK', date: 'November 26 - 7:30 PM', location: 'Kerckhoff Grand Salon', img: require('../assets/vulfpeck.jpg')},
  {type: 'FILMS', title: 'THOR: RAGNAROK', date: 'December 9 - 8:00 PM', location: 'James Bridge Theater', img: require('../assets/thor.jpg')},
  {type: 'SPEAKERS', title: 'TIM COOK', date: 'January 6 - 4:00 PM', location: 'Royce Hall', img: require('../assets/timcook.jpg')},
  {type: 'CONCERTS', title: 'BRUIN BASH', date: 'September 25 - 8:00 PM', location: 'Pauley Paviliion', img: require('../assets/bruinbash.jpg')},
  {type: 'CONCERTS', title: 'NONAME', date: 'November 2 - 7:00 PM', location: 'Kerckhoff Grand Salon', img: require('../assets/noname.jpg')}
]

export default class Events extends Component {
  render() {
    return (
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Event type={item.type} title={item.title} date={item.date} location={item.location} img={item.img}/>
        )}
        keyExtractor={item => item.title}
      />
    );
  }
}
