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
        this.props.onPressItem(this.props.dMovie)
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
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:10,
        marginTop:5,
        backgroundColor: '#F0F0F0',
        elevation: 10,
        borderRadius:5,
        borderColor:'#ccc',
        borderWidth:1,
        alignItems:'center'
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


