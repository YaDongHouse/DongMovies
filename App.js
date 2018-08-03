/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MovieList from './DongMovies/Movies/MovieList'



export default class App extends Component<Props> {

  render() {
    return (
      <View>
        <MovieList/>
      </View>
    );
  }
}

