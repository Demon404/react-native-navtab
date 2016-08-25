import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Platform,
} from 'react-native';

import LogIn from './login';

const defaultRoute = {
  component: LogIn,
};

export default class NavIndex extends Component {
  _renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  }
  render() {
    return (
      <Navigator
        initialRoute={defaultRoute}
        renderScene={this._renderScene}
        
        />
    );
  }
}
