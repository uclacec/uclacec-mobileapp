import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


export default class Header extends Component {
  constructor(props){
    super(props)
  }

  render() {

    const images = {
      filter: require('../../assets/filter.png'),
      logo: require('../../assets/ceclogo.jpeg'),
    };

    var img;
    if (this.props.canFilter == 'true')
      img = images.filter;
    else 
      img = images.logo;

    return (
      <View style={styles.header}>
        <TouchableOpacity
          disabled={this.props.disabled}
          onPress={ () => this.props.onClick()}
        >
          <Image style={styles.logo} source={img} />
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
    height: 30,
    width: 30,
    marginBottom: 5
  }
});
