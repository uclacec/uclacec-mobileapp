import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.logo} source={require('../../assets/ceclogo.jpeg')} />
        </TouchableOpacity>
        <Text style={styles.text}> {this.props.titleText} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 10,
    paddingLeft: 14,
    height: 75,
    backgroundColor: '#FFFFFF',
  },
  text: {
    alignContent: 'flex-end',
    textAlign: 'left',
    fontFamily: 'GTPressuraMonoTrial-Bold',
    fontSize: 38,
    marginBottom: -15,
  },
  logo: {
    height: 42,
    width: 42,
    borderRadius: 10
  }
});
