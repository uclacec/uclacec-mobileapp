import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class SideBar extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.concertsview}>
                    <TouchableOpacity>
                        <Text style={[styles.filter, styles.concerts]}>CONCERTS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.filmsview}>
                    <TouchableOpacity>
                        <Text style={[styles.filmsfilter, styles.films]}>FILMS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.speakersview}>
                    <TouchableOpacity>
                        <Text style={[styles.filter, styles.speakers]}>SPEAKERS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    concertsview : {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        //backgroundColor: 'red'
    },
    filmsview : {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        //backgroundColor: 'yellow'
    },
    speakersview : {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        //backgroundColor: 'blue'
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

export default SideBar;
