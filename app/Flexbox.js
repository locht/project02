import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class Flexboxs extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'red' }}>
                    {/* header */}
                    <View
                        style={{
                            flex: 0.5,
                            backgroundColor: 'yellow',
                            flexDirection: 'row'
                        }}>
                        <View
                            style={{
                                flex: 2,
                                justifyContent: 'center',
                                backgroundColor: 'red',
                                paddingHorizontal: 16
                            }}>
                            <Text
                                style={{
                                    flex: 2,
                                    justifyContent: 'center',
                                    backgroundColor: 'red',
                                    paddingHorizontal: 16
                                }}>
                                icon
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 8,
                                justifyContent: 'center',
                                backgroundColor: 'yellow'
                            }}>
                            <Text>Title </Text>
                        </View>
                    </View>
                    {/* context */}
                    <View
                        style={{
                            flex: 8,
                            backgroundColor: 'green'
                        }}>
                        <Text>Hello Flexboxs 2 </Text>
                    </View>
                    {/* footer */}
                    <View
                        style={{
                            flex: 1 / 2,
                            backgroundColor: 'blue',
                            flexDirection: 'row'
                        }}>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'red'
                            }}>
                            <Text>HOME</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'blue'
                            }}>
                            <Text>EXAMPLE</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'grey'
                            }}>
                            <Text>PROFILE</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
