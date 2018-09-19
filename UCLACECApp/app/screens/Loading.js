import React, {Component} from 'react';
import {
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

    this.yVal = new Animated.Value(0);
    this.opacity = new Animated.Value(1);
    this.stopBounce = false;

    this.state = {
      show: true,
    };
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
        this.yVal, {
          toValue: 1,
          duration: 1000,
          easing: Easing.bounce,
        }
      ),
      Animated.timing(
        this.yVal, {
          toValue: 0,
          duration: 300,
          easing: Easing.quad,
        }
      )
    ]).start(() => {
      if (!this.stopBounce)
        this.bounce();
    });
  }

  componentWillReceiveProps(newProps) {
    /*
     * If new component should unmount, this starts the unmount animation.
     */
    if (!newProps.mounted) {
      this.stopBounce = true;
      this.unMountAnimation();
    }
  }

  unMountAnimation() {
    Animated.sequence([
      Animated.timing(
        this.yVal, {
          delay: 300,
          toValue: -1,
          duration: 200,
          easing: Easing.linear,
        }
      ),
      Animated.timing(
        this.opacity,
        {
          delay: 500,
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
        }
      )
    ]).start(() => this.transitionEnd())
  }

  transitionEnd() {
    /*
     * After the transition is over, set state to show : false to un-render
     * the component and allow main app components to be interacted with.
     */
    this.setState({show: false});
  }

  render() {
    const y = this.yVal.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [-400, 0, 30]
    });

    return (
      this.state.show &&
      <Animated.View style={[styles.container, {opacity: this.opacity}]}>
        <Animated.Image style={[styles.img, {transform: [{'translateY': y}]}]}
                        source={require('../../assets/cec_loading.png')}
                        onLoad={this.handleImageLoaded.bind(this)}/>
      </Animated.View>

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