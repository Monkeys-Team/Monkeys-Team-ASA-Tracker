import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MonkeyTracker from 'react-native-monkey-tracker';

export default function App() {
  
  MonkeyTracker.init("MONKEY-TRACKER-ydsfqcykiyhty3r", 123, true).then(() => {})
  // MonkeyTracker.getStoreFront();

  return (
    <View style={styles.container}>
      <Text>Result:</Text>
      <TouchableOpacity onPress={ () => { MonkeyTracker.sendEvent("test_event",{ping:"pong"}) }}>
        <Text>
          Click
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
