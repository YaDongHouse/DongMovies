import React, {Component} from 'react';
import {
    Dimensions,//用于获取设备屏幕的宽高
    ActivityIndicator//等待的loading组件
} from 'react-native';

var Util = {
    //屏幕尺寸
    WindowSize: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    //基于fetch的get方法，只负责下载数据，下载后的数据处理操作在回调方法中实现
    /**
     *
     */
    getRequest(url, successCallback, failCallback) {
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                setTimeout(() => {
                    successCallback(responseData);
                }, 2000)
            })
            .catch((error) => failCallback(error))
    },
    //loading 效果
    loading: <ActivityIndicator
                style={{marginTop:250}}
                animating={true}
                color='green'
                size='large'/>

}

module.exports = Util;