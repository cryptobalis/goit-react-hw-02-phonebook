import React, { Component } from 'react';
import css from './App.module.css' 
import ContactForm from 'components/contactForm/';
import Filter from 'components/filter/';
import ContactList from 'components/contactList/';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  
addContact = (newContact) => {
  const { contacts } = this.state;
  const existingContact = contacts.some((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase());

  if (existingContact) {
    alert(`${newContact.name} is already in contacts!`);
  } else {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  }
};
    
  handleChangeFilter = (e) => {
      this.setState({filter: e.target.value})
  }
  handleDelete = (id) => {
        this.setState((prev) => ({
            contacts: prev.contacts.filter((contact) => contact.id !==id),
        }))
    }

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={css['phonebook__container']}>
        <h1 className={css['phonebook__title']}>Phonebook</h1>
        
        <ContactForm contacts={contacts} addContact={this.addContact} />

        <h2 className={css['contacts__title']}>Contacts</h2>
        <Filter filter={filter} handleChangeFilter={this.handleChangeFilter}/>
        
        {contacts.length === 0 ? (
          <p>No contacts available</p>
        ) : (
            <ul>
                {             
                    contacts
                      .filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))        
                      .map((contact) => (
                        <ContactList key={contact.id} contact={contact} handleDelete={this.handleDelete} />                        
                ))}
            </ul>
        )}
      </div>
    );
  }
}

export default App;