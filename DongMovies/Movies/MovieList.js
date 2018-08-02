/**
 * Create By  邱亚东
 * Email jasonof2011@sina.com
 * Date: 2018-08-02
 * Time: 18:13
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import SearchBar from './../Common/DSearchBar'

export default class MovieList extends Component {

    constructor() {
        super();
        this.state={
            show:false,
            movieTitle:'港囧'
        };
        this._changeText = this._changeText.bind(this)
        this._searchPress = this._searchPress.bind(this)
    }

    _changeText(text){
        this.setState({
            movieTitle:text
        });
    }
    _searchPress(){
        console.log(this.state.movieTitle)
    }

    render() {
        return (
            <View>
                <SearchBar
                    placeholder="请输入电影名称"
                    onChangeText={this._changeText}
                    onPress={this._searchPress}
                />
            </View>
        );
    }
}

var MovieStyle = StyleSheet.create({

})
