import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {
    Modals,
    Flexboxs,
    ActivityIndicators,
    FlatLists,
    Images,
    ScrollViews,
    Switchs
} from './components';
import Item from './Item';

export default class NewFeeds extends React.Component {
    render() {
        const Content =
            'User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms e.g., voice-controlled interfaces.';
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 1
                    }}>
                    {/* Avata */}
                    <View
                        style={{
                            minHeight: 50,
                            marginHorizontal: 16,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 8
                        }}>
                        <View>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: 'rgba(0, 0, 0, 0.7)'
                                }}>{`${'Chủ nhật, 03 / 07 / 2022'}`}</Text>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: 'rgba(0, 0, 0, 1)'
                                }}>{`${'22172'} - ${'Nguyễn Thanh Hiền'}`}</Text>
                        </View>
                        <View
                            style={{
                                backgroundColor: 'grey',
                                borderRadius: 100,
                                borderWidth: 0.2,
                                overflow: 'hidden'
                            }}>
                            <Image
                                style={{
                                    width: 55,
                                    height: 55,
                                    resizeMode: 'contain'
                                }}
                                source={require('../../asset/ic_avata.png')}
                            />
                        </View>
                    </View>
                    {/* Item */}
                    {/* <View style={{ flex: 1, marginHorizontal: 16 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={[1, 2, 3, 4, 5]}
                            renderItem={({ item, index }) => (
                                <View
                                    style={{
                                        flex: 1,
                                        marginVertical: 8,
                                        borderWidth: 0.5,
                                        borderColor:
                                            index % 2 === 0
                                                ? 'rgba(111, 227, 129, 0.6)'
                                                : 'rgba(228, 99, 82, 0.6)',
                                        borderRadius: 10,
                                        paddingHorizontal: 16,
                                        paddingVertical: 8,
                                        justifyContent: 'center'
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                        <View
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderRadius: 100,
                                                borderWidth: 0.5,
                                                borderColor:
                                                    'rgba(0, 110, 233, 0.6)'
                                            }}>
                                            <View
                                                style={{
                                                    overflow: 'hidden'
                                                }}>
                                                <Image
                                                    style={{
                                                        width: 35,
                                                        height: 35,
                                                        resizeMode: 'contain'
                                                    }}
                                                    source={require('../../asset/ic_avata.png')}
                                                />
                                            </View>
                                            <View
                                                style={{
                                                    position: 'absolute',
                                                    bottom: -4,
                                                    right: -4,
                                                    borderRadius: 10,
                                                    borderWidth: 0.2,
                                                    backgroundColor:
                                                        'rgba(0, 110, 233, 0.6)',
                                                    overflow: 'hidden'
                                                }}>
                                                <Image
                                                    style={{
                                                        width: 18,
                                                        height: 18,
                                                        resizeMode: 'contain'
                                                    }}
                                                    source={require('../../asset/ic_avata_group.png')}
                                                />
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                marginLeft: 16,
                                                flex: 1
                                            }}>
                                            <Text
                                                style={{
                                                    fontWeight: 'bold',
                                                    fontSize: 13,
                                                    color: 'rgba(0, 0, 0, 0.9)'
                                                }}>
                                                {`${'188193'}-${'Duong Thanh Phong'}`}
                                            </Text>

                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 11,
                                                        color: 'black'
                                                    }}>
                                                    {`${'22172'}-${'Nguyen Thanh Hien'}`}
                                                </Text>
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center'
                                                    }}>
                                                    <Image
                                                        style={{
                                                            width: 10,
                                                            height: 10,
                                                            resizeMode:
                                                                'contain'
                                                        }}
                                                        source={require('../../asset/ic_avata_group_2.png')}
                                                    />
                                                    <Text
                                                        style={{
                                                            fontSize: 10,
                                                            color: 'black',
                                                            marginLeft: 4
                                                        }}>
                                                        {`${'BHX_ĐBP_HCM_02'} | `}
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 10,
                                                            color: 'rgba(155, 14, 14, 1)'
                                                        }}>
                                                        {`${'21/07'} - ${'31/08'}`}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            position: 'absolute',
                                            height: '60%',
                                            width: 2.7,
                                            backgroundColor:
                                                index % 2 === 0
                                                    ? 'rgba(111, 227, 129, 0.6)'
                                                    : 'rgba(228, 99, 82, 0.6)'
                                        }}
                                    />

                                    <Text
                                        style={{
                                            marginTop: 4,
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: 'rgba(0, 0, 0, 0.9)'
                                        }}>
                                        {`${'Tiêu đề nội dung, hôm nay ăn gì'}`}
                                    </Text>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            marginTop: 2
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                color: 'black'
                                            }}
                                            numberOfLines={3}>
                                            {`${Content}`}
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            marginTop: 4,
                                            alignItems: 'center'
                                        }}>
                                        <View
                                            style={{
                                                flex: 5,
                                                flexDirection: 'row'
                                            }}>
                                            <TouchableOpacity>
                                                <Image
                                                    style={{
                                                        width: 18,
                                                        height: 18,
                                                        resizeMode: 'contain'
                                                    }}
                                                    source={require('../../asset/ic_avata_group.png')}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View
                                            style={{
                                                flex: 5,
                                                alignItems: 'flex-end'
                                            }}>
                                            <TouchableOpacity
                                                style={{
                                                    paddingVertical: 4,
                                                    minHeight: 24,
                                                    marginTop: 4,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    flexDirection: 'row',
                                                    borderWidth: 0.5,
                                                    borderRadius: 20,
                                                    borderColor:
                                                        index % 2 === 0
                                                            ? 'rgba(111, 227, 129, 0.6)'
                                                            : 'rgba(228, 99, 82, 0.6)',
                                                    paddingHorizontal: 16,
                                                    paddingVertical: 4
                                                }}>
                                                <Image
                                                    style={{
                                                        width: 18,
                                                        height: 18,
                                                        resizeMode: 'contain'
                                                    }}
                                                    source={
                                                        index % 2 !== 0
                                                            ? require('../../asset/ic_status.png')
                                                            : require('../../asset/ic_status_waring.png')
                                                    }
                                                />
                                                <Text
                                                    style={{
                                                        color: 'rgba(0, 0, 0, 1)',
                                                        fontSize: 10,
                                                        fontWeight: 'bold',
                                                        marginLeft: 4
                                                    }}>
                                                    {`${
                                                        index % 2 === 0
                                                            ? 'khẩn cấp'
                                                            : 'trung bình'
                                                    }`.toUpperCase()}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </View> */}
                </View>
            </SafeAreaView>
        );
    }
}
