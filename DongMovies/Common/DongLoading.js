/**
 * Create By  邱亚东
 * Email jasonof2011@sina.com
 * Date: 2018-08-03
 * Time: 17:43
 */
import React, {Component} from 'react';
import {
    ActivityIndicator
} from 'react-native';
import MovieList from "../Movies/MovieList";

export default class DongLoading extends Component {

    render() {
        let height = this.props.height;
        let width = this.props.width;
        return (
                <ActivityIndicator
                    style={{position:'absolute', top: height/2,left:width/2,backgroundColor:'#f0f'}}
                    animating={true}
                    color='green'
                    size='large'/>
            );
    }
}
