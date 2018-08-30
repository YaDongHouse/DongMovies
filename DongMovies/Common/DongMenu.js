import React, {Component} from 'react';
import {Modal, Text, StyleSheet, Image, Slider, TouchableOpacity, View} from 'react-native';
import DurationApi from "./DurationApi";

export default class DongMenu extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            //是否显示
            modalVisible: false
        };
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    render() {
        return (<Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
            }}
        >
            <View style={styles.dParent}>
                {/*顶部的导航*/}
                <View style={styles.topParent}>
                    <TouchableOpacity style={{marginLeft: 10,}} activeOpacity={1} onPress={this.props.onBack}>
                        <Image source={require('./../Res/Image/back.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.mTitle}>{this.props.title}</Text>
                </View>
                {/*底部的菜单*/}
                <View style={styles.bottomParent}>
                    {/*暂停与播放*/}
                    <TouchableOpacity style={styles.mPause} onPress={this.props.playControl}>
                        <Image
                            style={{width: 36, height: 36, resizeMode: 'contain'}}
                            source={this.props.isPaused ? require('./../Res/Image/play.png') : require('./../Res/Image/pause.png')}/>
                    </TouchableOpacity>
                    {/*进度提示*/}
                    <Text style={{marginLeft: 2, marginRight: 2,color:'#fff'}}>
                        {this.props.currentTime}
                    </Text>
                    <Slider
                        style={{flex: 1}}
                        value={this.props.currentTime}
                        minimumValue={0}
                        maximumValue={this.props.duration}
                        step={1}
                        onValueChange={value => {
                            console.log(value);
                            this.props.onValueChange(value)
                        }}
                        onSlidingComplete={value => {
                            this.props.onSlidingComplete(value)
                        }}/>
                    <Text style={{marginLeft: 2, marginRight: 2, color:'#fff'}}>
                        {DurationApi.format(this.props.duration)}
                    </Text>
                    {/*全屏播放*/}
                    <TouchableOpacity style={{width: 40, height: 40, padding: 5}} onPress={this.props.fullControl}>
                        <Image style={{flex: 1, resizeMode: 'contain'}}
                               source={require('./../Res/Image/full.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>)

    }
}
const styles = StyleSheet.create({
    dParent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topParent: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bottomParent: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center'
    },
    mPause: {
        alignSelf: 'center',
        marginLeft: 6,
    },
    mTitle: {
        position: 'absolute',
        left: '40%',
        right: "40%",
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }


})