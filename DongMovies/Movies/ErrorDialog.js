import React, {Component} from 'react';
import {ActivityIndicator, Modal, StyleSheet, TouchableOpacity,Text, View} from 'react-native';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
} from 'react-native-popup-dialog';
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });
const scaleAnimation = new ScaleAnimation();
export default class ErrorDialog extends Component {

    _show(){
        this.dialog.show();
    }

    render(){
        return(<View style={{position:'absolute', top:0,bottom:0,left:0,right:0}}>
                <PopupDialog
                    ref={(popupDialog) => {
                        this.dialog = popupDialog;
                    }}
                    dialogAnimation={scaleAnimation}
                    dialogTitle={<DialogTitle style={ss.title} title="温馨提示" />}
                >
                    <View style={ss.container}>
                        <View style={ss.contentContainer}>
                            <Text>{this.props.content}</Text>
                        </View>
                        <View style={ss.btnContainer}>
                            <DialogButton
                                text={this.props.btnName}
                                onPress={()=>{
                                    console.log("点击按钮")
                                }}
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
    },
    contentContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:5
    },
    btnContainer:{
        backgroundColor:'#0f0'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    }
})