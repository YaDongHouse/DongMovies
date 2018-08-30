/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View,StatusBar} from 'react-native';
import MovieView from "./DongMovies/Movies/MovieView";
import DongDialog from "./DongMovies/Common/DongDialog";
import DongMenu from "./DongMovies/Common/DongMenu";


export default class App extends Component<Props> {

    render() {
        return (
            <View style={{flex: 1}}>
                <MovieView />
            </View>
        );
    }
}

