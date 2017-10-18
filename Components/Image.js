import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default class TheImage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={this.props.style} source={this.props.source} />
      </View>
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
  }
})
