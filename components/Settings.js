import * as React from 'react';
import axios from 'axios';
import { Button, StyleSheet, View, Text } from 'react-native';

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#212121',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
