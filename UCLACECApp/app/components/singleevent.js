import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import AddButton from './addbutton.js';
import Modal from 'react-native-modal';

export default class Event extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    visibleModal: null,
  };

 _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {
    // get accent color
    let accentColor;
    if (this.props.type === 'concerts') {
      accentColor = '#FF664D'
    } else if (this.props.type === 'speakers') {
      accentColor = '#CE4EC8'
    } else {
      accentColor = '#FFA49F'
    }
    const url = "http://new.uclacec.com" + this.props.image.url;   // set url

    // format date
    date = this.props.date;
    MM = {Jan:"January", Feb:"February", Mar:"March", Apr:"April", May:"May",
    Jun:"June", Jul:"July", Aug:"August", Sep:"September", Oct:"October",
    Nov:"November", Dec:"December"};

    formatDate = String(new Date(date)).replace(
    /\w{3} (\w{3}) (\d{2}) (\d{4}) (\d{2}):(\d{2}):[^(]+\(([A-Z]{3})\)/,
    function($0,$1,$2,$3,$4,$5,$6){
        return MM[$1]+" "+$2+", "+$3+" - "+$4%12+":"+$5+(+$4>12?"PM":"AM");
    });

    return (
      <View>
        <TouchableOpacity 
          onPress={ () => this.setState({ visibleModal: 1 })}
        >
          <ImageBackground source={{"uri": url}} style={styles.image} >
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>{this.props.title}</Text>
                <Text style={styles.detailsText}>{formatDate}</Text>
                <Text style={styles.detailsText}>{this.props.location}</Text>
              </View>
              <AddButton
                addOrDelete={this.props.addOrDelete}
                handleOnClick={this.props.eventHandler}
                type={this.props.type}/>
              <View style={{flexDirection: 'column'}}>
                <View style={[styles.sideAccent, {backgroundColor: accentColor}]} ></View>
                <View style={[styles.sideAccentCorner, {borderTopColor: accentColor}]}></View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <Modal isVisible={this.state.visibleModal === 1}>
            {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 148,
    width: 400
  },
  container: {
    flexDirection: 'row',
    height: 148,
    width: 375
  },
  textContainer: {
    padding: 15,
    justifyContent: 'flex-end',
    height: 150,
    width: 366
  },
  titleText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'GTPressuraMonoTrial-Bold'
  },
  detailsText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'GTPressuraMonoTrial-Regular'
  },
  sideAccent: {
    height: 138,
    width: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  sideAccentCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderRightColor: 'transparent',
    transform: [
     {rotate: '90deg'}
   ]
  }
});
