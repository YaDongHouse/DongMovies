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
import ErrorDialog from "./ErrorDialog";


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

    _centerClick = () => {
        if (this.state.isShowMenu) {
            this.refs.dongMenu.setModalVisible(false)
            this.setState({
                isShowMenu: false
            })
        }
    }

    showMenu = () => {
        let dongMenu = this.refs.dongMenu
        if (!this.state.isShowMenu) {
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
        this.props.navigation.goBack()
    }

    _onLoad = (data) => {
        //视频总长度
        console.log(data)
        this.setState({duration: data.duration});
    }


    _onError = (error) => {
        console.log(error)
        let dongModal = this.refs.DongModal;
        if (dongModal.getModalVisible()) {
            dongModal.setModalVisible(false)
        }
        this.dialogs._show();
    }

    _onProgress = (data) => {
        //播放进度
        console.log("当前进度：" + parseInt(data.currentTime))
        this.setState({currentTime: parseInt(data.currentTime)});
    }

    _errorBtn = () => {
        this.dialogs._hide();
        this.props.navigation.goBack();
    }

    // 是否正在缓冲数据
    _onBuffer = ({isBuffering}: { isBuffering: boolean }) => {
        console.log(isBuffering)
        let dongModal = this.refs.DongModal;
        let modalVisible = dongModal.getModalVisible();
        console.log("是否显示：" + modalVisible)
        if (isBuffering && !modalVisible) {
            dongModal.setModalVisible(true)
        }
        if (!isBuffering && modalVisible) {
            dongModal.setModalVisible(false)
        }
    }

    componentDidMount() {
        this.refs.DongModal.setModalVisible(true)
    }

    componentWillUnmount() {
        Orientation.lockToPortrait();
    }

    render() {
        let movie = this.props.navigation.state.params.movieDetail;
        return (
            <TouchableOpacity style={{flex: 1}} onPress={this.showMenu} activeOpacity={1}>
                <View style={{flex: 1, backgroundColor: '#000'}}>
                    <Video
                        ref={ref => this.player = ref}
                        style={parent.mVideo}
                        source={{uri: movie.play_url}}
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
                        title={movie.title}
                        onValueChange={this._onValueChange}
                        onSlidingComplete={(value) => {
                            this.player.seek(value)
                        }}
                        centerClick={this._centerClick}
                        fullControl={this.fullControl}
                    />
                    <DongModal ref="DongModal"/>
                    <ErrorDialog
                        ref={(popupDialog) => {
                            this.dialogs = popupDialog;
                        }
                        }
                        btnClick={this._errorBtn}
                    />
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

