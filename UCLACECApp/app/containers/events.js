import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import {connect} from 'react-redux';

import Event from '../components/singleevent.js';
import {imageLoaded} from '../api/redux/actions/index';

class Events extends Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.props.myEvents}
        renderItem={({item}) => (
          <Event
            id={item._id}
            time={item.time}
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
            imageLoaded={() => this.props.imageLoaded(item._id)}
          />
        )}
        keyExtractor={item => item._id}
      />
    );
  }
}

const mapStateToProps = () => {
  return { };
};

const mapDispatchToProps = dispatch => {
  return {
    imageLoaded: (img) => dispatch(imageLoaded(img)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events)