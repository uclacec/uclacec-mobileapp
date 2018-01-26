import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class AddButton extends Component {
  render() {
    let accentColor;
    if (this.props.type === 'CONCERTS') {
      accentColor = '#FF664D'
    } else if (this.props.type === 'SPEAKERS') {
      accentColor = '#CE4EC8'
    } else {
      accentColor = '#FFA49F'
    }

    return (
      <TouchableOpacity style={styles.button} onPress={this.props.handleOnClick}>
        <View onClick={this.handleClick}>
          <Text style={{fontFamily: 'GTPressuraMonoTrial-Regular', color: accentColor, fontSize: 20}}>+</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 15,
    right: 30,
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
