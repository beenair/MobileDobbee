import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';

import Home from './components/home';
import Chat from './components/chat';



export default function App() {
  return (

    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route  exact path="/" component={Home}  />
          <Route  exact path="/chat" component={Chat}  />
          <Route/>
        </Switch>
      </View>
    </NativeRouter>
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