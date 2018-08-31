/**
 * Create By  邱亚东
 * Email jasonof2011@sina.com
 * Date: 2018-08-02
 * Time: 11:09
 */
import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default class DSearchBar extends Component {

    render() {
        return (
            // 最外层容器
            <View style={Styles.parent}>
                {/*左边的输入框外容器*/}
                <TextInput style={Styles.input} underlineColorAndroid='transparent' {...this.props} />
                {/*右边的提交容器*/}
                <Text style={Styles.btn} {...this.props}>搜索</Text>
            </View>
        );
    }
}

var Styles = StyleSheet.create({
    parent:{
        flexDirection:'row',
        height:40,
        marginTop:5,
        marginBottom:5,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    input:{
        flex:1,
        marginLeft:5,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#CCC',
        padding:0,
        paddingLeft:4,
        height:40
    },
    btn:{
        width:55,
        height:40,
        backgroundColor:'#23BEEF',
        borderRadius:5,
        textAlign:'center',
        lineHeight:40,
        marginLeft:5,
        marginRight:5,
        fontSize:15,
        fontWeight:'bold',
        color:'#fff'
    }

})
