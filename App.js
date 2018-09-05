/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MovieView from "./DongMovies/Movies/MovieView";
import MovieList from "./DongMovies/Movies/MovieList";
import {DrawerNavigator, StackNavigator, TabNavigator} from 'react-navigation'

const RootStack = StackNavigator(
    {//定义路由
        MovieList: {                       //定义Home对应HomeScreen组件
            screen: MovieList,
        },
        PlayMovie: {
            screen: MovieView,
        },
    },
    {//定义配置
        initialRouteName: 'MovieList',     //设置初始路由为Home
        navigationOptions: {
            header: null
        },
    }
);
export default class App extends Component<Props> {

    render() {
        return (<RootStack/>);
    }
}
