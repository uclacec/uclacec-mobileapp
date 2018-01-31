import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class SideBar extends React.Component {

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
});

export default SideBar;