import React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';
import ListMessages from './listMessage';
import FormMessage from './formMessage';



export default ({ history })=>{

  

    return(


          <View style = {styles.container}>

            <View style={styles.head}>
              <Text>Bienvenu dans le Chat</Text>
              
              <Button
                title = "Accueil"
                onPress = {()=>history.push('/')}
              />
            </View>

            <View style={styles.list}>
              <ListMessages/>
            </View>

            <View style={styles.form}>
              <FormMessage/>
            </View>

              
          </View>

    );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    margin:0,
    width: '100%'
    },
  head:{
    flex:2,
    width:'100%',
    flexDirection :'row'
  },
  list:{
    flex:14
  },
  form:{
    flex:1
  }
});
