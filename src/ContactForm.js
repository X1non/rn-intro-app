import React, { useState } from "react";
import Constants from 'expo-constants';
import { Button, StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
    
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
})

const ContactForm = (props) => {

    const [name, onChangeName] = useState('');
    const [phoneNum, onChangePhoneNum] = useState('')

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} 
            value={name} 
            onChangeText={onChangeName}
            placeholder="Contact Name"
            />
            <TextInput style={styles.input} 
            value={phoneNum} 
            onChangeText={onChangePhoneNum}
            keyboardType="numeric"
            placeholder="Contact Number"
            />
            <Button title="Add Contact"></Button>
        </View>
    )
};

export default ContactForm;