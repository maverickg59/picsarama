import React from 'react'
import { StyleSheet } from 'react-native'
import { Actions, Router, Scene, Tabs } from 'react-native-router-flux'

import Home from './Views/HomeView'
import Camera from './Views/CameraView'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene tabs={true} tabBarStyle={styles.tabBarStyle} labelStyle={styles.tabs} key="root">
          <Scene key="Home" hideNavBar={true} component={Home} initial={true} />
          <Scene key="Camera" hideNavBar={true} component={Camera} />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 15,
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700'
  },
  tabBarStyle: {
    borderTopWidth: 0.5,
    backgroundColor: '#5e6266',
    opacity: 1
  },
  tabs: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
    padding: 5
  }
})

{
  /* <View style={styles.container}>
  <Image style={styles.container} />
  <Text>Tap the button to take a pic!</Text>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>Take Pic</Text>
  </TouchableOpacity>
</View> */
}
