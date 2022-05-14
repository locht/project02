import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    ActivityIndicator,
    RefreshControl
} from 'react-native';

const data = [
    { title: 'nội dung 1' },
    { title: 'nội dung 2' },
    { title: 'nội dung 3' },
    { title: 'nội dung 4' },
    { title: 'nội dung 5' },
    { title: 'nội dung 6' },
    { title: 'nội dung 7' },
    { title: 'nội dung 8' },
    { title: 'nội dung 9' },
    { title: 'nội dung 10' },
    { title: 'nội dung 11' },
    { title: 'nội dung 12' }
];

export default class FlatLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderItem = ({ item, index }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    marginVertical: 16,
                    backgroundColor: index === 0 ? 'red' : 'grey'
                }}>
                <Text style={{ fontSize: 20 }}>Hello</Text>
                <Text>{item.title}</Text>
            </View>
        );
    };

    ListEmptyComponent = () => (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: '#000', fontSize: 18 }}>No Data</Text>
        </View>
    );

    ListHeaderComponent = () => (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: '#000', fontSize: 18 }}>
                Tiêu đề FlatList
            </Text>
        </View>
    );

    ListFooterComponent = () => (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: '#000', fontSize: 18 }}>
                phần cuối FlatList
            </Text>
            <ActivityIndicator size="large" color="green" />
        </View>
    );

    onRefresh = () => {
        console.log('onRefresh');
        // call api
        return true;
    };

    onEndReached = () => {
        console.log('onEndReached');
        // call api
        return false;
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* <View style={{ flex: 1 }}>
                        <Text>Tiêu đề FlatList</Text>
                        // ScrollView, FlatList, SectionList, VirtualizedList
                    </View> */}
                    <View style={{ flex: 1 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={data}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index}
                            numColumns={2}
                            ListEmptyComponent={this.ListEmptyComponent}
                            ListHeaderComponent={this.ListHeaderComponent}
                            ListFooterComponent={this.ListFooterComponent}
                            onEndReachedThreshold={0.2}
                            onEndReached={this.onEndReached}
                            refreshControl={
                                <RefreshControl
                                    onRefresh={this.onRefresh}
                                    refreshing={false}
                                />
                            }
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
