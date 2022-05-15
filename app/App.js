import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {
    Modals,
    Flexboxs,
    ActivityIndicators,
    FlatLists,
    Images,
    ScrollViews,
    Switchs
} from './components';
import { Login } from './container';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Login />
            </SafeAreaView>
        );
    }
}
