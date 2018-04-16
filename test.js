import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Geek extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{height: 100, width: 100, backgroundColor: '#f00'}}>
        <Text
          style={{
            textSize: 12,
            fontFamily: 'ScalaSansOT',
            fontSize: 12,
            letterSpacing: this.somestate ? 12 : 13,
          }}
        >
          {this.constructor.name}
        </Text>
      </View>
    );
  }
}
