import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PopupDialog, {DialogButton, DialogTitle, FadeAnimation, ScaleAnimation,} from 'react-native-popup-dialog';

const fadeAnimation = new FadeAnimation({ animationDuration: 150 });
const scaleAnimation = new ScaleAnimation();
export default class ErrorDialog extends Component {

    static defaultProps = {
        content:'资源错误',
        btnName:'关闭',
    }

    _show(){
        this.dialog.show();
    }

    _hide(){
        this.dialog.dismiss();
    }

    render(){
        return(<View style={{position:'absolute', top:0,bottom:0,left:0,right:0}}>
                <PopupDialog
                    ref={(popupDialog) => {
                        this.dialog = popupDialog;
                    }}
                    width={'70%'}
                    height={'40%'}
                    style={ss.popDialog}
                    dialogAnimation={scaleAnimation}
                    dialogTitle={<DialogTitle
                        style={ss.title}
                        titleAlign={'center'}
                        titleStyle={{backgroundColor:'#ff0'}}
                        titleTextStyle={{fontSize:25,color:'#000'}}
                        title="温馨提示" />}
                >
                    <View style={ss.container}>
                        <View style={ss.contentContainer}>
                            <Text style={{fontSize:18, color:'#f00'}}>{this.props.content}</Text>
                        </View>
                        <View style={ss.btnContainer}>
                            <DialogButton
                                textContainerStyle={{paddingHorizontal: 0,
                                    paddingVertical: 0,}}
                                textStyle={{fontSize:20,color:"#000"}}
                                text={this.props.btnName}
                                onPress={this.props.btnClick}
                            />
                        </View>
                    </View>
                </PopupDialog>
        </View>)
    }
}
let ss = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    contentContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:5
    },
    btnContainer:{
        width:'60%',
        height:'30%',
        borderRadius: 8,
        backgroundColor:'#ff0',
        marginBottom:10,
        justifyContent:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
    popDialog:{
        borderRadius: 8,
        backgroundColor: '#ffffff',
    }
})