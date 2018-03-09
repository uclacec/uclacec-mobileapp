import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index.js';

class SideBar extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.allView}>
                    <TouchableOpacity onPress={()=>this.props.filterEvents("SHOW_ALL")}>
                        <Text style={[styles.filter]}>ALL</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.concertsview}>
                    <TouchableOpacity onPress={()=>this.props.filterEvents("CONCERTS", this.props.allEvents)}>
                        <Text style={[styles.filter, styles.concerts]}>CONCERTS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.filmsview}>
                    <TouchableOpacity onPress={()=>this.props.filterEvents("FILMS", this.props.allEvents)}>
                        <Text style={[styles.filmsfilter, styles.films]}>FILMS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.speakersview}>
                    <TouchableOpacity onPress={()=>this.props.filterEvents("SPEAKERS", this.props.allEvents)}>
                        <Text style={[styles.filter, styles.speakers]}>SPEAKERS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
  return {
    allEvents: state.loadEvents.events,
    myEvents: state.myEvents,
    visibility: state.visibilityFilter.events
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterEvents: (filter, events) => dispatch(setVisibilityFilter(filter, events))
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    allView: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: 150,
    },
    concertsview : {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },
    filmsview : {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },
    speakersview : {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },
    filmsfilter: {
        transform: [{rotate: '270deg'}],
        fontSize: 34,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'right',
        width: 100,
        textDecorationLine: 'underline',
        fontFamily: 'GTPressuraMonoTrial-Bold'
    },
    filter: {
        transform: [{rotate: '270deg'}],
        fontSize: 34,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'right',
        width: 150,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontFamily: 'GTPressuraMonoTrial-Bold'
    },
    concerts: {
        color: '#FF664D',
    },
    films: {
        color: '#FFA49F',
    },
    speakers: {
        color: '#CE4EC8',
    },
});


export default SideBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
