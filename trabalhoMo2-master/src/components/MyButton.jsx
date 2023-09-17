import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 4,
        borderRadius: 4,
        margin: 4,
        backgroundColor: 'blue',
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    }
});

const MyButton = ({title, onPressButton}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPressButton}>
            <View>
                <Text style={styles.buttonTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MyButton;