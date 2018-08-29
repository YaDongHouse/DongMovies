/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import MovieView from "./DongMovies/Movies/MovieView";
import DongDialog from "./DongMovies/Common/DongDialog";
import DongMenu from "./DongMovies/Common/DongMenu";


export default class App extends Component<Props> {

    render() {
        return (
            <View style={{flex: 1}}>
                <DongMenu
                    onBack={() => {
                        console.log("返回")
                    }}
                    isPaused={false}
                    playControl={() => {
                        console.log("暂停控制")
                    }}
                    currentTime={20}
                    duration={100}
                    onValueChange={(value) => {
                        console.log(value)
                    }}
                    onSlidingComplete={(value) => {
                        console.log(value)
                    }}
                    fullControl={() => {
                        console.log("全屏控制")
                    }}
                />
            </View>
        );
    }
}

