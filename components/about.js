import React, { Component } from 'react';
import { View } from 'react-native';


export default class About extends Component{

  render(){

    return(

      <View>

        <Text style={style.titre}>A PROPOS</Text>

        <Text style={style.paragraphe}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis autem natus dolores iste dicta tempore non tempora quam, 
          ut debitis eius hic commodi ullam animi voluptatum. Eveniet molestias minus quidem.
        </Text>

      </View>

    )
  }
}

const style = StyleSheet.create({
  titre:{
    fontSize:30,
    fontWeight:'bold',
  },
  paragraphe:{
    fontSize:16,
    margin:25,
  }
})