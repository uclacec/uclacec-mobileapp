import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';

//props: title, type, description, fblink, trailerlink, onClick
export default class ModalView extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let hasFbLink = false;
    if (this.props.fblink != "") {
      hasFbLink = true;
    }

    let hasTrailer = false;
    let accentColor;
    if (this.props.type === 'concerts') {
      accentColor = '#FF664D'
    } else if (this.props.type === 'speakers') {
      accentColor = '#CE4EC8'
    } else if (this.props.type === 'films') {
      accentColor = '#FFA49F'
      if (this.props.trailer != "") 
        hasTrailer = true
    }
    else {
      accentColor = '#FFBE06'
    }

    //fb button color
    let fbColor = 'gray';
    if (hasFbLink)
      fbColor = 'black'

    //trailer button color
    let trailerColor = 'gray';
    if (hasTrailer)
      trailerColor = 'black'

    return (
      <View style={[styles.modalContainer, {borderColor: accentColor}]}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.onClick()}>
            <Text style={styles.buttonx}>&#x2715;</Text>
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{this.props.title}</Text>
          <Text style={styles.detailsText}>{formatDate}</Text>
          <Text style={styles.detailsText}>{this.props.location}</Text>
        </View>

        <ScrollView style={{ marginBottom: 10, height: 200}}>
          <Text>{this.props.description}</Text>
        </ScrollView>

        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity 
            style={[styles.linkButton, {borderColor: fbColor}]} 
            onPress={() => Linking.openURL(this.props.fblink)}
            disabled={!hasFbLink}>
            <Text style={{fontWeight: 'bold', color: fbColor}}>Open in FB</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.linkButton, {borderColor: trailerColor}]} 
            onPress={() => Linking.openURL(this.props.trailerlink)}
            disabled={!hasTrailer}>
            <Text style={{fontWeight: 'bold', color: trailerColor}}>Trailer</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    height: 450,
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 5,
  },
  button: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  buttonx:{
    fontWeight: 'bold', 
    fontSize: 20
  }, 
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginTop: 10
  },
  titleText: {
    color: 'black',
    fontSize: 28,
    fontFamily: 'GTPressuraMonoTrial-Bold'
  },
  detailsText: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'GTPressuraMonoTrial-Bold',
    fontWeight: 'normal'
  },
  linkButton: {
    flex: 1,
    height: 40,
    padding: 10,
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'black',
  },
});
