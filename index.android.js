import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator } from 'react-native';
import Touchables from './app/components/Touchables.js';
import Input from './app/components/Input.js';
import Api from './app/components/Api.js';
import SingleUser from './app/components/SingleUser.js';

export default class training extends Component {
  renderScene(route, navigator) {
    switch(route.title) {
      case 'listView':
        return  (<Api navigator={navigator} title="listView" />)
      case 'singleUser':
        return  (<SingleUser user={route.user} navigator={navigator} title="singleUser" />)
    }

  }
  render() {
    return(
      <View>
        <Touchables />
        <Input />
        <Navigator
          initialRoute={{title: 'singleUser'}}
          renderScene={this.renderScene}
          configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
         />
      </View>
    );
  }
}

AppRegistry.registerComponent('training', () => training);
