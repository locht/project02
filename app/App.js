import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Flexboxs from './Flexbox';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Flexboxs />
            </SafeAreaView>
        );
    }
}
