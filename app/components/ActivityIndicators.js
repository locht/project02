import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

export default class ActivityIndicators extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadding: false
        };
    }
    render() {
        const { loadding } = this.state;
        console.log('loadding', loadding);
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{ marginBottom: 16 }}>
                        Hello ActivityIndicators
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                        ActivityIndicators Large
                    </Text>
                    <ActivityIndicator size="large" color="green" />
                    <Text style={{ marginBottom: 16 }}>
                        ActivityIndicators Small
                    </Text>
                    <ActivityIndicator size="small" color="green" />

                    <TouchableOpacity
                        onPress={() =>
                            this.setState({
                                ...this.state,
                                loadding: !loadding
                            })
                        }
                        style={{
                            marginTop: 16,
                            width: 250,
                            height: 60,
                            borderWidth: 2,
                            borderColor: 'green',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100
                        }}>
                        {!loadding ? (
                            <Text
                                style={{
                                    color: 'green',
                                    fontWeight: 'bold',
                                    fontSize: 18
                                }}>
                                Show ActivityIndicator
                            </Text>
                        ) : (
                            <ActivityIndicator size="large" color="green" />
                        )}
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
