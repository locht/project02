import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default class Switchs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switchs: false
        };
    }
    render() {
        const { switchs } = this.state;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text>Component Switch</Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'red',
                            width: 90,
                            height: 40,
                            borderRadius: 100,
                            overflow: 'hidden',
                            justifyContent: 'center'
                        }}>
                        <View
                            style={{
                                backgroundColor: 'white',
                                width: 40,
                                height: '85%',
                                borderRadius: 100,
                                margin: 4,
                                position: 'absolute',
                                right: 0
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{ marginTop: 16 }} />
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'grey',
                            width: 90,
                            height: 40,
                            borderRadius: 100,
                            overflow: 'hidden',
                            justifyContent: 'center'
                        }}>
                        <View
                            style={{
                                backgroundColor: 'white',
                                width: 40,
                                height: '85%',
                                borderRadius: 100,
                                margin: 4
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{ marginTop: 16 }}>
                        {switchs ? (
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() =>
                                    this.setState({
                                        ...this.state,
                                        switchs: !switchs
                                    })
                                }
                                style={{
                                    backgroundColor: 'red',
                                    width: 90,
                                    height: 40,
                                    borderRadius: 100,
                                    overflow: 'hidden',
                                    justifyContent: 'center'
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        width: 40,
                                        height: '85%',
                                        borderRadius: 100,
                                        margin: 4,
                                        position: 'absolute',
                                        right: 0
                                    }}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() =>
                                    this.setState({
                                        ...this.state,
                                        switchs: !switchs
                                    })
                                }
                                style={{
                                    backgroundColor: 'grey',
                                    width: 90,
                                    height: 40,
                                    borderRadius: 100,
                                    overflow: 'hidden',
                                    justifyContent: 'center'
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        width: 40,
                                        height: '85%',
                                        borderRadius: 100,
                                        margin: 4
                                    }}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
