import React from 'react'
import { StyleSheet, View, AsyncStorage } from 'react-native'
import { Camera, Video, FileSystem, Permissions, Vibration } from 'expo'
import { Actions } from 'react-native-router-flux'

import Image from '../Components/Image'
import Button from '../Components/Button'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uri: '',
      photoId: 1
    }
  }

  async _loadUri() {
    try {
      let uri = await AsyncStorage.getItem('uri')
      let puri = JSON.parse(uri)
      if (puri !== null) {
        this.setState({
          uri: puri.uri
        })
      } else {
        console.log('Take some photos!')
      }
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={{
              height: this.state.uri.height / 4,
              width: this.state.uri.width / 4,
              borderRadius: 15
            }}
            source={{ uri: this.state.uri.uri }}
          />
        </View>
        <View style={styles.box}>
          <Button
            buttonName="Show Photo"
            onPress={() => {
              this._loadUri()
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-end'
  },
  box: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  }
})
