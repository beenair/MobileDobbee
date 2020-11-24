import React, { Component } from 'react';
import {View} from 'react-native'
import ListMessages from './listMessage'
import FormMessage from './formMessage'


export default class Chat extends Component{

  render(){

    return(

      <View>

        <ListMessages/>

        <FormMessage/>

      </View>

    )

  }
}