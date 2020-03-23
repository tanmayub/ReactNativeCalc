import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contHistory}>
                </View>

                <View style={styles.contOutput}>
                    <View style={styles.placeHolderOutput}>
                        <Text style={styles.txtDefault}>OUTPUT HERE</Text>
                    </View>
                </View>

                <View style={styles.contButtons}></View>
            </View>
        );
    }
}