/**
 * Create By  邱亚东
 * Email jasonof2011@sina.com
 * Date: 2018-08-03
 * Time: 18:02
 */
import React, {Component} from 'react';
import {ActivityIndicator, Modal, StyleSheet, TouchableOpacity, View} from 'react-native';

export default class DongModal extends Component {

    state = {
        modalVisible: false
    };

    setModalVisible= (visible) => {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        console.log("关闭成功")
                    }}
                >
                    <TouchableOpacity style={styles.container}
                              activeOpacity={1}
                              onPress={() => {
                                  console.log("点击弹框")
                              }}
                    >
                        <View style={styles.view_shadow}>
                            <ActivityIndicator
                                animating={true}
                                color={'red'}
                                size={'large'}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    view_shadow: {
        borderRadius: 10,
        backgroundColor: '#0006',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },

});


