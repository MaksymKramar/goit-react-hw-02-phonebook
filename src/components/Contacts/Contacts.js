import React from 'react';
import PropTypes from 'prop-types';
import { Container,ContactList,Item,NameSpan,TextP,DelBtn } from './Contacts.style';

function Contacts({ contacts, onDeleteContact }) {
    
    return (
        <Container>        
            <ContactList>
                {contacts.map(({ id, name,number }) => (
                    <Item key={id}>
                        <TextP><NameSpan>{name}</NameSpan>: {number}</TextP>
                        <DelBtn type="button" onClick={() => onDeleteContact(id)}>Delete</DelBtn>
                    </Item>
                ))}
            </ContactList>
        </Container>
    )
}

export default Contacts
