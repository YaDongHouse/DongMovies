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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class MovieView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPaused: false,
            isFull: false,
            isShowMenu: false,
            duration:0,
            currentTime:0,
        }
    }

    pauseControl = () => {
        this.setState({
            isPaused: !this.state.isPaused
        })
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
        if (!this.state.isShowMenu) {
            this.setState({
                isShowMenu: true
            })
            this.timer && clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.setState({
                    isShowMenu: false
                })
            }, 5000)
        }
    }

    // 返回的方法
    _onBack = () =>{

    }


    _onLoad = (data) => {
        //视频总长度
        this.setState({duration: data.duration});
    }

    _onProgress = (data) => {
        //播放进度
        this.setState({currentTime: data.currentTime});
    }

    // 是否正在缓冲数据
    _onBuffer = ({ isBuffering }: { isBuffering: boolean }) => {
        console.log(isBuffering)
        let dongModal = this.refs.DongModal
        if (isBuffering) {
            console.log("展示loading")
            dongModal.setModalVisible(true)
        }else {
            console.log("取消展示loading")
            dongModal.setModalVisible(false)
        }
    }

    render() {
        return (
            <TouchableOpacity style={{flex: 1}} onPress={this.showMenu} activeOpacity={1}>
                <View style={{flex: 1,backgroundColor:'#000'}}>
                    {this.state.isShowMenu ? (<TouchableOpacity style={parent.topParent} activeOpacity={1}>
                        <Image source={require('./../Res/Image/back.png')} onPress={this._onBack}/>
                    </TouchableOpacity>) : null}
                    <Video
                        ref={ref => this.player = ref}
                        style={parent.mVideo}
                        source={{uri:"http://sohu.zuida-163sina.com/20180326/e4CMGktE/index.m3u8"}}
                        paused={this.state.isPaused}
                        onLoad={this._onLoad}
                        onBuffer={this._onBuffer}
                        resizeMode="contain"
                        onProgress={this._onProgress}/>
                    {this.state.isShowMenu ? (<View style={parent.barParent}>
                        {/*暂停与播放*/}
                        <TouchableOpacity onPress={this.pauseControl}>
                            <Image
                                source={this.state.isPaused ? require('./../Res/Image/play.png') : require('./../Res/Image/pause.png')}/>
                        </TouchableOpacity>
                        {/*进度提示*/}
                        <Slider
                            style={parent.mSlider}
                            value={this.state.currentTime}
                            minimumValue={0}
                            maximumValue={this.state.duration}
                            step={1}
                            onValueChange={value =>{
                                console.log(value);
                                this.setState({currentTime:value})
                            }}
                            onSlidingComplete={value => this.player.seek(value)}/>
                        {/*全屏播放*/}
                        <TouchableOpacity style={{width: 40, height: 40, padding: 5}} onPress={this.fullControl}>
                            <Image style={{flex:1,resizeMode: 'contain'}}
                                   source={require('./../Res/Image/full.png')}/>
                        </TouchableOpacity>
                    </View>) : null}
                    <DongModal ref = "DongModal"/>

                </View></TouchableOpacity>)
    }
}

const parent = StyleSheet.create({
    topParent:{
       width:'100%',
       height:30,
       backgroundColor:'#444444',
        alignItems:'flex-start',
        paddingLeft:10,
        justifyContent:'center'
    },
    barParent: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 40,
        paddingLeft:10,
        backgroundColor: '#444444',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mVideo:{
        flex: 1,
        backgroundColor:'#000'
    },
    mSlider:{
        flex:1,
        marginLeft:10
    }
});

