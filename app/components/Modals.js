import React, { Component } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    TouchableOpacity,
    SafeAreaView,
    Dimensions
} from 'react-native';

class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    // componentDidMount = () => {
    //     return this.setModalVisible(true);
    // };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };

    render() {
        const Width = Dimensions.get('window').width;
        const Height = Dimensions.get('window').height;
        const { modalVisible } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={modalVisible}>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(41, 41, 41, 0.3)'
                            }}>
                            <View
                                style={{
                                    // flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(255, 255, 255, 1)',
                                    marginHorizontal: 32,
                                    borderRadius: 16,
                                    overflow: 'hidden'
                                }}>
                                <View
                                    style={{
                                        padding: 16,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 20,
                                            color: 'rgba(0, 0, 0, 1)'
                                        }}>
                                        Hello
                                    </Text>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            color: 'rgba(0, 0, 0, 1)'
                                        }}>
                                        I am two option alert. Do you want to
                                        cancel me ?
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: Width - 64,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderTopWidth: 0.5,
                                        borderColor: 'rgba(41, 41, 41, 0.3)'
                                    }}>
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.setModalVisible(!modalVisible)
                                        }
                                        style={{
                                            flex: 1,
                                            paddingVertical: 16
                                        }}>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontSize: 16,
                                                color: 'rgba(9, 116, 241, 1)',
                                                fontWeight: 'bold'
                                            }}>
                                            No
                                        </Text>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            height: '100%',
                                            width: 1,
                                            backgroundColor:
                                                'rgba(41, 41, 41, 0.3)'
                                        }}
                                    />
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.setModalVisible(!modalVisible)
                                        }
                                        style={{
                                            flex: 1,
                                            paddingVertical: 16
                                        }}>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontSize: 16,
                                                color: 'rgba(9, 116, 241, 1)',
                                                fontWeight: 'bold'
                                            }}>
                                            Yes
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => this.setModalVisible(true)}>
                        <Text style={styles.textStyle}>Hiện Alert Custom</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: '#F194FF'
    },
    buttonClose: {
        backgroundColor: '#2196F3'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
});

export default Modals;
