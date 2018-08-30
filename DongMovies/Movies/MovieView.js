/**
 * Create By  邱亚东
 * Email jasonof2011@sina.com
 * Date: 2018-08-10
 * Time: 16:36
 */
import React, {Component} from 'react';
import {Dimensions, Image, Slider, StyleSheet, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video'
import Orientation from 'react-native-orientation';
import DongModal from "../Common/DongModal";
import DongMenu from '../Common/DongMenu';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class MovieView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPaused: false,
            isFull: true,
            isShowMenu: false,
            duration: 0,
            currentTime: 0,
        };
    }

    pauseControl = () => {
        this.setState({
            isPaused: !this.state.isPaused
        })
    }

    _onValueChange = (value) => {
        console.log(value);
        this.setState({currentTime: value})
    }

    fullControl = () => {
        if (this.state.isFull) {
            this.setState({
                isFull: false
            })
            Orientation.lockToLandscapeLeft() //转成横屏（向左）
            // Orientation.lockToLandscapeRight() //转成横屏（向右）
        } else {
            this.setState({
                isFull: true
            })
            // 将视图锁定为纵向模式
            Orientation.lockToPortrait()
        }
    }

    showMenu = () => {
        let dongMenu = this.refs.dongMenu
        if(this.state.isShowMenu){
            dongMenu.setModalVisible(false)
            this.setState({
                isShowMenu: false
            })
        }else {
            dongMenu.setModalVisible(true)
            this.setState({
                isShowMenu: true
            })
            this.timer && clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                dongMenu.setModalVisible(false)
                this.setState({
                    isShowMenu: false
                })
            }, 5000)
        }
    }


    // 返回的方法
    _onBack = () => {

    }

    _onLoad = (data) => {
        //视频总长度
        console.log(data)
        this.setState({duration: data.duration});
    }


    _onError = (error) => {
        console.log(error)
    }

    _onProgress = (data) => {
        //播放进度
        console.log("当前进度："+parseInt(data.currentTime))
        this.setState({currentTime: parseInt(data.currentTime)});
    }

    // 是否正在缓冲数据
    _onBuffer = ({isBuffering}: { isBuffering: boolean }) => {
        console.log(isBuffering)
        let dongModal = this.refs.DongModal
        if (isBuffering) {
            console.log("展示loading")
            dongModal.setModalVisible(true)
        } else {
            console.log("取消展示loading")
            dongModal.setModalVisible(false)
        }
    }

    render() {
        return (
            <TouchableOpacity style={{flex: 1}} onPress={this.showMenu} activeOpacity={1}>
                <View style={{flex: 1, backgroundColor: '#000'}}>
                    <Video
                        ref={ref => this.player = ref}
                        style={parent.mVideo}
                        source={{uri: "http://hair.jingpin88.com/20171026/ZDgTT6NQ/index.m3u8"}}
                        paused={this.state.isPaused}
                        onLoad={this._onLoad}
                        onError={this._onError}
                        onBuffer={this._onBuffer}
                        resizeMode="contain"
                        onProgress={this._onProgress}/>
                    <DongMenu
                        ref='dongMenu'
                        onBack={this._onBack}
                        isPaused={this.state.isPaused}
                        playControl={this.pauseControl}
                        currentTime={this.state.currentTime}
                        duration={this.state.duration}
                        title={"蚁人3"}
                        onValueChange={this._onValueChange}
                        onSlidingComplete={(value) => {
                            this.player.seek(value)
                        }}
                        fullControl={this.fullControl}
                    />
                    <DongModal ref="DongModal"/>
                </View></TouchableOpacity>)
    }
}

const parent = StyleSheet.create({
    topParent: {
        width: '100%',
        height: 30,
        backgroundColor: '#444444',
        alignItems: 'flex-start',
        paddingLeft: 10,
        justifyContent: 'center'
    },
    barParent: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 40,
        paddingLeft: 10,
        backgroundColor: '#444444',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mVideo: {
        flex: 1,
        backgroundColor: '#000'
    },
    mSlider: {
        flex: 1,
        marginLeft: 10
    }
});

