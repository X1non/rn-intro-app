import React, { useState } from 'react';
import { Button, ScrollView, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { registerRootComponent } from 'expo';
import Constants from 'expo-constants';
import contacts, { compareNames } from './contacts';
import Row from './Row';
import ContactList from './ContactsList';
import ContactForm from './ContactForm';


const App = () => {
    const [showContacts, setShowContacts] = useState(false);
    const [contactArr, setContactArr] = useState(contacts);
    const [showAddForm, setShowAddForm] = useState(false);

    // FlatList updates when there's update on props, 
    // that's why we need to redeclare new array "[...contactArr]" when sorting in order to be updated
    // array.sort() didn't update props, because its sort in the same array (same reference)
    const sortContacts = () => {
        setContactArr([...contactArr].sort(compareNames));
    }

    // render item should be seperate so each render wont create new function (better performance)
    // const renderContactItem = (obj) => <Row {...(obj.item)}></Row>
    if (showAddForm) return <ContactForm />
    return (
        <View style={styles.container}>
            <Button title="toggle contacts" onPress={() => setShowContacts(!showContacts)} />
            <Button title="sorts" onPress={() => sortContacts()} />
            <Button title="add contact form" onPress={() => setShowAddForm(!showAddForm)} />
            {showContacts && 
                (
                // <ScrollView>
                //     {contacts.map((contact) => (<Row {...contact}></Row>))}
                // </ScrollView>
                // <FlatList 
                //     renderItem={renderContactItem}
                //     data={contactArr}>
                // </FlatList>
                <ContactList contacts={contactArr}>
                </ContactList>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Constants.statusBarHeight,
    },
});

registerRootComponent(App);
