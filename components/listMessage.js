import React, { Component } from 'react';
import { View , StyleSheet, Text } from 'react-native';
import axios from 'axios'


export default class ListMessages extends Component {


  state = {
    messages : [],
  }

  componentDidMount(){
      axios.get('https://cv.beenair.fr/profil.php')
        .then(res=>{messages = res.data})
        .then(this.setState({messages}))
      console.log(this.state.messages);
  }
  
  


  render (){

    return(

      <View style={styles.container}>
        <Text>Blablabla</Text>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor : '#000'
  }
})