import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class SingleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      street: this.props.user.address.street
    }
  }

  render() {

    return(
      <View>
        <Text>{this.state.name} : {this.state.address.street}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('SingleUser', () => SingleUser);
