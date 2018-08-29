import React, {Component} from 'react';
import {ActivityIndicator, Modal, Text,StyleSheet, Image,Slider,TouchableOpacity, View} from 'react-native';
export default class DongMenu extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            //是否显示
            show:false
        };
      }

      render(){
          return(<Modal>
              <View style={styles.dParent}>
                  {/*顶部的导航*/}
                  <View style={styles.topParent}>
                      <TouchableOpacity style={styles.mTopBackParent} activeOpacity={1} onPress={this.props.onBack} >
                          <Image source={require('./../Res/Image/back.png')}  />
                      </TouchableOpacity>
                  </View>
                  {/*底部的菜单*/}
                  <View style={styles.bottomParent}>
                      {/*暂停与播放*/}
                      <TouchableOpacity onPress={this.props.playControl}>
                          <Image
                              source={this.props.isPaused ? require('./../Res/Image/play.png') : require('./../Res/Image/pause.png')}/>
                      </TouchableOpacity>
                      {/*进度提示*/}
                      <Slider
                          style={styles.mSlider}
                          value={this.props.currentTime}
                          minimumValue={0}
                          maximumValue={this.props.duration}
                          step={1}
                          animationType={()=>{}}
                          onValueChange={value =>{
                              console.log(value);
                              this.props.onValueChange(value)
                          }}
                          onSlidingComplete={value => {
                              this.props.onSlidingComplete(value)
                          }}/>
                      {/*全屏播放*/}
                      <TouchableOpacity style={{width: 40, height: 40, padding: 5}} onPress={this.props.fullControl}>
                          <Image style={{flex:1,resizeMode: 'contain'}}
                                 source={require('./../Res/Image/full.png')}/>
                      </TouchableOpacity>
                  </View>
              </View>
          </Modal>)
      }
}
const styles = StyleSheet.create({
    dParent:{
        flex:1,
        justifyContent:'space-between',
    },
    topParent:{
        height:30,
        backgroundColor:'#444444',
    },
    bottomParent:{
        height:40,
        flexDirection:'row'
    },
    mTopBackParent:{
        paddingLeft:10,
        alignSelf:'flex-start',
    },
    mSlider:{
        flex:1
    }
})