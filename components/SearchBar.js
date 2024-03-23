import * as React from "react";
import { SearchBar } from "@rneui/base";
import { StyleSheet, View } from 'react-native';

export default () => {
  const [value, setValue] = React.useState("");
  return (
    <SearchBar
      platform="default"
      containerStyle={{}}
      inputContainerStyle={{}}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder="Type query here..."
      placeholderTextColor="#888"
      cancelButtonTitle="Cancel"
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      value={value}
    />
  );
}

const styles = StyleSheet.create({ 
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: '#eaeaeaa'
	}
})

<Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'My home',
                        headerStyle: {
                            backgroundColor: '#1DB954',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }, 
                    }}
                />