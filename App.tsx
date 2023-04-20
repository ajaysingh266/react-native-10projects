import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
          Hello
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  blackText: {
    color: '#000',
  },
});
export default App;
