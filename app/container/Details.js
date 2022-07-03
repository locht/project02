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

const Content =
    'user interface (UI) is anything a user may interact with to use a digital product or service. This includes everything from screens and touchscreens, keyboards, sounds, and even lights. To understand the evolution of UI, however, it’s helpful to learn a bit more about its history and how it has evolved into best practices and a profession.';
export default class Details extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, marginTop: 40, marginHorizontal: 16 }}>
                    {/* Nhom, nguoi nhan */}
                    <View
                        style={{
                            flex: 0.3,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <View>
                            <View
                                style={{
                                    backgroundColor: 'grey',
                                    borderRadius: 100,
                                    borderWidth: 0.2,
                                    overflow: 'hidden'
                                }}>
                                <Image
                                    style={{
                                        width: 38,
                                        height: 38,
                                        resizeMode: 'contain'
                                    }}
                                    source={require('../asset/ic_avata.png')}
                                />
                            </View>
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    borderRadius: 100,
                                    borderWidth: 0.2,
                                    backgroundColor: 'yellow'
                                }}>
                                <Image
                                    style={{
                                        width: 18,
                                        height: 18,
                                        resizeMode: 'contain'
                                    }}
                                    source={require('../asset/ic_avata_group.png')}
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
                                    fontSize: 14,
                                    color: 'black'
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
                                            resizeMode: 'contain'
                                        }}
                                        source={require('../asset/ic_avata_group_2.png')}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color: 'black',
                                            marginLeft: 4
                                        }}>
                                        {`${'BHX_ĐBP_HCM_02'}`}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* Nguoi theo doi */}
                    <View style={{ alignItems: 'flex-end' }}>
                        <FlatList
                            horizontal
                            data={[1, 2, 3, 4, 5]}
                            renderItem={({ item, index }) => (
                                <View
                                    style={{
                                        borderRadius: 100,
                                        borderWidth: 0.2,
                                        backgroundColor: 'yellow',
                                        flexDirection: 'row'
                                    }}>
                                    <Image
                                        style={{
                                            width: 18,
                                            height: 18,
                                            resizeMode: 'contain'
                                        }}
                                        source={require('../asset/ic_avata_group.png')}
                                    />
                                </View>
                            )}
                        />
                        <Text
                            style={{
                                fontSize: 10,
                                color: 'black'
                            }}>
                            {`${'TGD_HCM_BTH - 26 Phan Đăng Lưu'}`}
                        </Text>
                    </View>
                    {/* Tieu De */}
                    <View style={{ flex: 0.3 }}>
                        <Text
                            style={{
                                color: 'rgba(0, 110, 233, 1)',
                                fontSize: 14,
                                fontWeight: 'bold'
                            }}>
                            {`${'Tiêu đề'}`}
                        </Text>
                        <View
                            style={{
                                flex: 1,
                                borderRadius: 10,
                                borderWidth: 0.5,
                                borderColor: 'rgba(0, 110, 233, 0.2)',
                                paddingHorizontal: 16,
                                paddingVertical: 8,
                                minHeight: 35,
                                marginTop: 4,
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 12
                                }}>
                                {`${'Nội dung Tiêu Đề, hôm nay ăn gì?'}`}
                            </Text>
                        </View>
                    </View>
                    {/* Ngay thang */}
                    <View
                        style={{
                            flex: 0.3,
                            marginTop: 16,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                        <View style={{ flex: 1, marginRight: 8 }}>
                            <Text
                                style={{
                                    color: 'rgba(0, 110, 233, 1)',
                                    fontSize: 14,
                                    fontWeight: 'bold'
                                }}>
                                {`${'Từ'}`}
                            </Text>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    borderRadius: 10,
                                    borderWidth: 0.5,
                                    borderColor: 'rgba(0, 110, 233, 0.2)',
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                    minHeight: 35,
                                    marginTop: 4,
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(0, 110, 233, 0.02)'
                                }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 12
                                    }}>
                                    {`${'Chọn ngày'}`}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, marginLeft: 8 }}>
                            <Text
                                style={{
                                    color: 'rgba(0, 110, 233, 1)',
                                    fontSize: 14,
                                    fontWeight: 'bold'
                                }}>
                                {`${'Đến'}`}
                            </Text>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    borderRadius: 10,
                                    borderWidth: 0.5,
                                    borderColor: 'rgba(0, 110, 233, 0.2)',
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                    minHeight: 35,
                                    marginTop: 4,
                                    justifyContent: 'center'
                                }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 12
                                    }}>
                                    {`${'Chọn ngày'}`}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* 2 Button */}
                    <View
                        style={{
                            flex: 0.3,
                            marginTop: 16,
                            justifyContent: 'space-between'
                        }}>
                        <Text
                            style={{
                                color: 'rgba(0, 110, 233, 1)',
                                fontSize: 14,
                                fontWeight: 'bold'
                            }}>
                            {`${'Trạng thái'}`}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    borderRadius: 10,
                                    borderWidth: 0.5,
                                    borderColor: 'rgba(0, 110, 233, 0.6)',
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                    minHeight: 35,
                                    marginTop: 4,
                                    justifyContent: 'center',
                                    marginRight: 8,
                                    alignItems: 'center',
                                    borderBottomWidth: 2,
                                    borderBottomColor: 'rgba(13, 96, 223, 0.6)',
                                    borderRightWidth: 4,
                                    borderRightColor: 'rgba(13, 96, 223, 0.6)'
                                }}>
                                <Text
                                    style={{
                                        color: 'rgba(13, 96, 223, 0.6)',
                                        fontSize: 12
                                    }}>
                                    {`${'đang xử lý'}`.toUpperCase()}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    borderRadius: 10,
                                    borderWidth: 0.5,
                                    borderColor: 'rgba(0, 110, 233, 0.6)',
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                    minHeight: 35,
                                    marginTop: 4,
                                    justifyContent: 'center',
                                    marginLeft: 8,
                                    alignItems: 'center',
                                    borderBottomWidth: 2,
                                    borderBottomColor: 'rgba(13, 96, 223, 0.6)',
                                    borderRightWidth: 4,
                                    borderRightColor: 'rgba(13, 96, 223, 0.6)'
                                }}>
                                <Text
                                    style={{
                                        color: 'rgba(13, 96, 223, 0.6)',
                                        fontSize: 12
                                    }}>
                                    {`${'khẩn cấp'}`.toUpperCase()}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Noi dung */}
                    <View style={{ flex: 2, marginTop: 16 }}>
                        <Text
                            style={{
                                color: 'rgba(0, 110, 233, 1)',
                                fontSize: 14,
                                fontWeight: 'bold'
                            }}>
                            {`${'Nội dung'}`}
                        </Text>
                        <View
                            style={{
                                flex: 1 / 1.2,
                                borderWidth: 0.5,
                                borderColor: 'rgba(13, 96, 223, 0.6)',
                                borderRadius: 10,
                                paddingHorizontal: 16,
                                paddingVertical: 8,
                                marginTop: 4
                            }}>
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: 'black',
                                        textAlign: 'left'
                                    }}>{`${Content}`}</Text>
                            </ScrollView>
                        </View>
                    </View>
                    {/* Link Tab Hinh Anh */}
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            minHeight: 50,
                            position: 'absolute',
                            bottom: 0,
                            borderTopWidth: 0.5,
                            borderTopColor: 'rgba(13, 96, 223, 0.6)',
                            backgroundColor: 'rgba(255, 255, 255, 1)'
                        }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View
                                    style={{
                                        width: 38,
                                        height: 38,
                                        resizeMode: 'contain',
                                        borderWidth: 1,
                                        borderColor: 'rgba(13, 96, 223, 0.6)',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10,
                                        marginHorizontal: 4
                                    }}>
                                    <Image
                                        style={{
                                            width: 28,
                                            height: 28,
                                            resizeMode: 'contain'
                                        }}
                                        source={require('../asset/ic_avata_group.png')}
                                    />
                                </View>
                                <View
                                    style={{
                                        width: 38,
                                        height: 38,
                                        resizeMode: 'contain',
                                        borderWidth: 1,
                                        borderColor: 'rgba(13, 96, 223, 0.6)',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10,
                                        marginHorizontal: 4
                                    }}>
                                    <Image
                                        style={{
                                            width: 28,
                                            height: 28,
                                            resizeMode: 'contain'
                                        }}
                                        source={require('../asset/ic_avata_group.png')}
                                    />
                                </View>
                                <View
                                    style={{
                                        width: 38,
                                        height: 38,
                                        resizeMode: 'contain',
                                        borderWidth: 1,
                                        borderColor: 'rgba(13, 96, 223, 0.6)',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10,
                                        marginHorizontal: 4
                                    }}>
                                    <Image
                                        style={{
                                            width: 28,
                                            height: 28,
                                            resizeMode: 'contain'
                                        }}
                                        source={require('../asset/ic_avata_group.png')}
                                    />
                                </View>
                            </View>
                            <Image
                                style={{
                                    width: 18,
                                    height: 18,
                                    resizeMode: 'contain'
                                }}
                                source={require('../asset/ic_avata_group.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
