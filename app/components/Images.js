import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    ImageBackground,
    Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Images extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground
                    style={{
                        position: 'absolute',
                        zIndex: -2,
                        width,
                        height,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://i.pinimg.com/736x/3e/9b/1e/3e9b1eec58c54f5495772865a9294132.jpg'
                    }}
                />
                <ImageBackground
                    style={{
                        position: 'absolute',
                        zIndex: -1,
                        width: width,
                        height: height / 6,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://xuconcept.com/wp-content/uploads/2021/11/tai-hinh-nen-mien-phi.jpg'
                    }}
                />
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100,
                            overflow: 'hidden'
                        }}>
                        <View
                            style={{
                                borderRadius: 100,
                                overflow: 'hidden'
                            }}>
                            <Image
                                style={{
                                    resizeMode: 'cover',
                                    width: 200,
                                    height: 200
                                }}
                                source={{
                                    uri: 'https://3gviettel.vn/wp-content/uploads/2021/12/viettel-money.png'
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}>
                        <Image
                            style={{
                                resizeMode: 'contain',
                                width: 300,
                                height: 300
                            }}
                            source={{
                                uri: 'https://3gviettel.vn/wp-content/uploads/2021/12/viettel-money.png'
                            }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
