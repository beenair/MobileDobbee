import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <Image source={require('./src/icons/dobby.jpg')}/>
      <Text style={styles.text}>Soyez les bienvenus Moldus !!</Text>
      <Button title="En avant" onPress={()=>Alert.alert("C'est parti !!")}/>
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
  text:{
    margin:30,
    fontSize:24,
    fontWeight :'bold',
  },
});