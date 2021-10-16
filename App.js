import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () =>{
  const [focusSubject,setFocusSubject] = useState('');
  return (
    <View style={styles.container}>
     {focusSubject ? <Text>Here is where I am going to build a time</Text>:<Text>I want to build input field</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;