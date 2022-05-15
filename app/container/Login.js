import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Platform,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Login extends Component {
    constructor(props) {
        super(props);
        this.inputUsername = React.createRef;
        this.inputPassword = React.createRef;
        this.state = {
            valueUserName: '',
            valuePassword: ''
        };
    }

    _onChangeText = (params, key) => {
        if (key === 'username') {
            return this.setState({ ...this.state, valueUserName: params });
        }
        return this.setState({ ...this.state, valuePassword: params });
    };

    _onSubmitEditing = (key) => {
        if (key === 'username') {
            return this.inputPassword.focus();
        }
        return this.handleLogin();
    };

    handleLogin = () => {
        const { valueUserName, valuePassword } = this.state;
        const body = {
            username: valueUserName,
            password: valuePassword
        };
        console.log('body', body);
        // call action api
    };

    render() {
        const { valueUserName, valuePassword } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={
                        Platform.OS === 'android' ? undefined : 'padding'
                    }>
                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps={'always'}>
                        <View
                            style={{
                                // flex: 1,
                                width,
                                height,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <View
                                style={{ flex: 2, justifyContent: 'flex-end' }}>
                                <Image
                                    style={{
                                        width: 88,
                                        height: 98,
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_lg_main' }}
                                />
                            </View>
                            <View
                                style={{
                                    flex: 8,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <View style={{ marginTop: 38 }}>
                                    <Text
                                        style={{
                                            fontSize: 28,
                                            fontWeight:
                                                Platform.OS === 'android'
                                                    ? 'bold'
                                                    : '900',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'rgba(44, 44, 44, 1)'
                                        }}>
                                        LOGIN NOW
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width:
                                            Dimensions.get('window').width - 32,
                                        height:
                                            Platform.OS === 'android'
                                                ? 66
                                                : 70.5,
                                        borderWidth: 1,
                                        borderRadius: 16,
                                        borderColor: 'rgba(167, 155, 191, 1)',
                                        alignItems: 'center',
                                        paddingHorizontal: 16,
                                        flexDirection: 'row',

                                        shadowColor: 'rgba(0, 0, 0, 1)',
                                        shadowOffset: {
                                            width: 0,
                                            height: 0
                                        },
                                        shadowOpacity: 0.3,
                                        shadowRadius: 8,
                                        overflow: 'hidden',
                                        marginTop: 32
                                    }}>
                                    <Image
                                        style={{
                                            width: 24,
                                            height: 24,
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_lg_run' }}
                                    />
                                    <TextInput
                                        ref={(refs) => {
                                            this.inputUsername = refs;
                                        }}
                                        style={{
                                            width: '95%',
                                            paddingHorizontal: 8,
                                            fontWeight: 'bold',
                                            fontSize: 16
                                        }}
                                        onChangeText={(params) =>
                                            this._onChangeText(
                                                params,
                                                'username'
                                            )
                                        }
                                        value={valueUserName}
                                        placeholder="User name"
                                        keyboardType={'numeric'}
                                        onSubmitEditing={() =>
                                            this._onSubmitEditing('username')
                                        }
                                        autoFocus
                                    />
                                </View>

                                <View
                                    style={{
                                        width:
                                            Dimensions.get('window').width - 32,
                                        height:
                                            Platform.OS === 'android'
                                                ? 66
                                                : 70.5,
                                        borderWidth: 1,
                                        borderRadius: 16,
                                        borderColor: 'rgba(167, 155, 191, 1)',
                                        alignItems: 'center',
                                        paddingHorizontal: 16,
                                        flexDirection: 'row',

                                        shadowColor: 'rgba(0, 0, 0, 1)',
                                        shadowOffset: {
                                            width: 0,
                                            height: 0
                                        },
                                        shadowOpacity: 0.3,
                                        shadowRadius: 8,
                                        overflow: 'hidden',
                                        marginTop: 32
                                    }}>
                                    <Image
                                        style={{
                                            width: 24,
                                            height: 24,
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_lg_lock' }}
                                    />
                                    <TextInput
                                        ref={(refs) => {
                                            this.inputPassword = refs;
                                        }}
                                        style={{
                                            width: '95%',
                                            paddingHorizontal: 8,
                                            fontWeight: 'bold',
                                            fontSize: 16
                                        }}
                                        onChangeText={(params) =>
                                            this._onChangeText(
                                                params,
                                                'password'
                                            )
                                        }
                                        value={valuePassword}
                                        placeholder="Password"
                                        keyboardType="default"
                                        secureTextEntry={true}
                                        returnKeyType={'done'}
                                        onSubmitEditing={() =>
                                            this._onSubmitEditing('password')
                                        }
                                    />
                                </View>

                                <TouchableOpacity
                                    style={{ marginTop: 24 }}
                                    onPress={this.handleLogin}>
                                    <Image
                                        style={{
                                            width: 221,
                                            height: 64,
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_lg_btn_login' }}
                                    />
                                </TouchableOpacity>

                                <View style={{ marginTop: 16 }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: '400',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'rgba(44, 44, 44, 1)'
                                        }}>
                                        Forgot password?
                                    </Text>
                                </View>

                                <TouchableOpacity style={{ marginTop: 48 }}>
                                    <Image
                                        style={{
                                            width: 221,
                                            height: 64,
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_lg_btn_signup' }}
                                    />
                                </TouchableOpacity>

                                <View style={{ marginTop: 16 }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: '400',
                                            fontStyle: 'italic',
                                            textAlign: 'center',
                                            color: 'rgba(44, 44, 44, 1)',
                                            marginHorizontal: 35
                                        }}>
                                        Make sure you agree to
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: '700',
                                                fontStyle: 'italic',
                                                textAlign: 'center',
                                                color: 'rgba(44, 44, 44, 1)'
                                            }}>
                                            {` MOVEARN's `}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: '400',
                                                fontStyle: 'italic',
                                                textAlign: 'center',
                                                color: '#F44369',
                                                textDecorationLine: 'underline'
                                            }}>
                                            {`User Agreement`}
                                        </Text>
                                        {' & '}
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: '400',
                                                fontStyle: 'italic',
                                                textAlign: 'center',
                                                color: '#F44369',
                                                textDecorationLine: 'underline'
                                            }}>
                                            {`User Privacy`}
                                        </Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

export default Login;
