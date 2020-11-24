import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';


export default class FormMessage extends Component{

  render(){

    return(

      <View style={styles.container}>

        <TextInput style={styles.input}/>

        <Button style={styles.button}
          title = "Envoyer"
        />

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor :'#FF6433',
    flexDirection:'row',
    height:'100%'
  },
  input:{
    backgroundColor : '#74FF33',
    flex:10
  },
  button:{
    flex:2
  }
})