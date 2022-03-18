import React from 'react';
import { Text, View, StyleSheet, SectionList } from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row'

// render item should be seperate so each render wont create new function (better performance)
const renderContactItem = (obj) => <Row {...(obj.item)}></Row>
const renderSectionHeader = (( {section: {title}} ) => (
    <Text>{title}</Text>
));

const ContactsList = (props) => {
    const contactsByFirstLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase();
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {});

    const sections = Object.keys(contactsByFirstLetter).sort().map(letter => ({
        title: letter,
        data: contactsByFirstLetter[letter],
    }))

    return (
        <SectionList
            renderItem={renderContactItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}>
        </SectionList>
    )
};

// basically TypeScript thingy, assure the data type of props that being passed on is the same as the one we set
ContactsList.propTypes = {
    contacts: PropTypes.array,
};

export default ContactsList;