import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    StatusBar,
    RefreshControl,
    Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ScrollViews extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    keyboardShouldPersistTaps={'handled'}
                    style={{ flex: 1 }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, backgroundColor: 'pink' }}>
                        <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                            <Text style={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'grey' }}>
                            <Text style={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 16
    },
    text: {
        fontSize: 42
    }
});
