/**
 * Create By  邱亚东
 * Email jasonof2011@sina.com
 * Date: 2018-08-03
 * Time: 10:48
 */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class MyListItem extends React.PureComponent {
    _onPress = () =>{
        this.props.onPressItem(this.props.id)
    }
    render() {
        let movie = this.props.dMovie;
        return (
          <TouchableOpacity  onPress={this._onPress}>
              <View style={Styles.parent}>
              <Image style={Styles.leftImage}  source={{uri:movie.image}} />
              <View style={Styles.rightParent}>
                  <Text style={Styles.textSetting}>名称：{movie.title}</Text>
                  <Text style={Styles.textSetting}>演员：{movie.actor}</Text>
                  <Text style={Styles.textSetting}>播放次数：{movie.number}</Text>
                  <Text style={Styles.textSetting}>类型：{movie.edition}</Text>
              </View>
              </View>
          </TouchableOpacity>
        );
    }
}

let Styles = StyleSheet.create({
    parent:{
        flexDirection:'row',
        height:120,
        padding:10,
        backgroundColor: '#F0F0F0',
        elevation: 10,
        margin:5,
        borderRadius:5,
        borderColor:'#2b2b2b',
        borderWidth:1,
    },
    leftImage:{
        marginLeft:5,
        width:80,
        height:110
    },
    rightParent:{
        flex:1,
        marginLeft:15,
    },
    textSetting:{
        flex:1,
        color:'black'
    }
})


