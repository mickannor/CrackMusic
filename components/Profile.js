import * as React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
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