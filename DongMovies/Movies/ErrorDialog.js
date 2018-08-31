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

export default class ErrorDialog extends Component {
    render(){
        return(<View style={{flex:1}}>
            <PopupDialog
                ref={(popupDialog) => {
                    this.dialog = popupDialog;
                }}
                dialogAnimation={fadeAnimation}
                dialogTitle={<DialogTitle title="温馨提示" />}
            >
                <View>
                    <Text></Text>
                </View>

            </PopupDialog>
        </View>)
    }
}