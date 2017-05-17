import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';


export default class Touchables extends Component {
  onPress() {
    console.log('Area pressed')
  }

  onPress2() {
    console.log('asd')
  }
  render() {
    return(
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>asd</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight style={styles.v1} onPress={this.onPress} underlayColor="black">
            <View>
              <Text>View1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity style={styles.v2} onPress={this.onPress2}>
            <View>
              <Text>View2</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text>View2</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: '#000000'
  },
  myText: {
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  }

});

AppRegistry.registerComponent('Touchables', () => Touchables);
