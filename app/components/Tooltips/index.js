import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

class Tooltips extends Component {
    constructor(props) {
        super(props);
        this.Tooltip = React.createRef;
        this.state = {
            isRender: true
        };
    }

    measureLayoutTooltips = () => {
        this.Tooltip.measure((x, y, width, height, pageX, pageY) => {
            this.setState({
                ...this.state,
                x,
                y,
                width,
                height,
                pageX,
                pageY
            });
            return console.log('measureLayoutTooltips', x, y, width, height, pageX, pageY);
        });
    };

    componentDidMount = () => {
        setTimeout(this.measureLayoutTooltips);
    };

    componentDidUpdate = () => {
        const { visible } = this.props;
        const { isRender } = this.state;
        if (visible && isRender) {
            this.setState({ ...this.state, isRender: false });
            setTimeout(this.measureLayoutTooltips);
            return true;
        }
        if (!visible && !isRender) {
            this.setState({ ...this.state, isRender: true });
            return true;
        }
        return false;
    };

    render() {
        const { visible, content, placement, onPressNext, onPressSkip } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <Modal animationType="none" transparent={true} visible={visible}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(43, 43, 43, 0.6)'
                        }}>
                        <View
                            style={[
                                {
                                    position: 'absolute',
                                    left: 0 // this.state.pageX,
                                    // top:
                                    //     placement === 'top'
                                    //         ? this.state.pageY - this.state.width
                                    //         : this.state.pageY,
                                    // bottom: this.state.pageX - this.state.width,
                                    // placement === 'top'
                                    //     ? this.state.pageY - this.state.y - 24
                                    //     : this.state.pageY + 8,
                                    // marginVertical: this.state.height + 8
                                },
                                placement === 'top'
                                    ? {
                                          bottom: this.state.pageX - this.state.width
                                      }
                                    : {
                                          top: this.state.pageY + this.state.height + 8
                                      }
                            ]}>
                            <View
                                style={{
                                    marginHorizontal: 16,
                                    borderRadius: 16,
                                    backgroundColor: 'rgba(255, 255, 255, 1)',
                                    paddingHorizontal: 16,
                                    paddingVertical: 24
                                }}>
                                {content}
                                <View
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: 'rgba(255, 255, 255, 1)',
                                        width: 19,
                                        height: 11,
                                        bottom: -10,
                                        left: this.state.pageX + this.state.height,
                                        zIndex: -1,
                                        backgroundColor: 'transparent',
                                        borderStyle: 'solid',
                                        borderRightWidth: 37,
                                        borderRightColor: 'transparent',
                                        borderTopWidth: 75,
                                        borderTopColor: 'rgba(255, 255, 255, 1)',
                                        borderLeftWidth: 37,
                                        borderLeftColor: 'transparent'
                                    }}
                                />
                            </View>
                        </View>

                        <View
                            style={{
                                position: 'absolute',
                                top: this.state.pageY,
                                left: this.state.pageX,
                                width: this.state.width,
                                backgroundColor: 'transparent'
                            }}>
                            {this.props.children}
                        </View>

                        <View
                            style={{
                                position: 'absolute',
                                bottom: 16,
                                flexDirection: 'row',
                                marginHorizontal: 16,
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                            <TouchableOpacity
                                onPress={onPressSkip}
                                style={{ flex: 1, alignItems: 'flex-start', paddingVertical: 16 }}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        fontStyle: 'italic',
                                        color: 'rgba(255, 255, 255, 0.6)'
                                    }}>
                                    SKIP
                                </Text>
                            </TouchableOpacity>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        fontStyle: 'italic',
                                        color: 'rgba(255, 255, 255, 1)'
                                    }}>
                                    2/6
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={onPressNext}
                                style={{ flex: 1, alignItems: 'flex-end', paddingVertical: 16 }}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        fontStyle: 'italic',
                                        color: 'rgba(244, 67, 105, 1)'
                                    }}>
                                    NEXT
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View
                    // onPress={this.measureLayoutTooltips}
                    ref={(refs) => {
                        this.Tooltip = refs;
                    }}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

export default Tooltips;
