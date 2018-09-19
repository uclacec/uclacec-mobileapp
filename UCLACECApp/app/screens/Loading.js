import React, {Component} from 'react';
import {
  View,
  Animated,
  Easing,
  StyleSheet
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class Loading extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor() {
    super();

    this.yVal = new Animated.Value(0)
  }

  handleImageLoaded() {
    /*
     * When CEC image loads, hide the splash screen
     */
    SplashScreen.hide();
  }

  componentDidMount() {
    /*
     * Starts animating CEC logo
     */
    this.bounce();
  }

  bounce() {
    this.yVal.setValue(0);
    Animated.sequence([
      Animated.timing(
        this.yVal,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.bounce,
        }
      ),
      Animated.timing(
        this.yVal,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.quad,
        }
      )
    ]).start(() => this.bounce())
  }

  render() {
    const y = this.yVal.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 30]
    });

    return (
      <View style={styles.container}>
        <Animated.Image style={[styles.img, {transform: [{'translateY': y}]}]}
                        source={require('../../assets/cec_loading.png')}
                        onLoad={this.handleImageLoaded.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'absolute',
    zIndex: 1,
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBE06',
  },
  img: {
    height: 120,
    width: 120,
    marginBottom: 80,
  }
});