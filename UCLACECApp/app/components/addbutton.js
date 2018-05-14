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
    if (this.props.type === 'concerts') {
      accentColor = '#FF664D'
    } else if (this.props.type === 'speakers') {
      accentColor = '#CE4EC8'
    } else if (this.props.type === 'films') {
      accentColor = '#FFA49F'
      grayedOut = 'black'
    }
    else {
      accentColor = '#FFBE06'
      grayedOut = 'gray'
    }

    return (
      <TouchableOpacity
        disabled={this.props.disable}
        style={[styles.button, this.props.disable ? styles.disabled : styles.enabled]}
        onPress={this.props.handleOnClick}>
        <View style={this.props.disable ? styles.disabledText : styles.enabledText} onClick={this.handleClick}>
          <Text style={[styles.text, {color: accentColor}]}>{this.props.addOrDelete}</Text>
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
  },
  disabled: {
    backgroundColor: 'rgba(252, 251, 252, 0.7)'
  },
  enabled: {
    backgroundColor: 'white'
  },
  disabledText: {
    opacity: 0.8
  },
  enabledText: {
    opacity: 1
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center"
  }
});
