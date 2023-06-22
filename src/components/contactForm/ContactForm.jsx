import React, { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

   handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        if (name.trim() === '' || number.trim() === '') {
            return;
        }

        const newContact = {
            id: nanoid(),
            name: name.trim(),
            number: number.trim()
        };

       this.props.addContact(newContact); 
       
        this.setState({
            name: '',
            number: ''
        });
    };

  render() {
    const { name, number } = this.state;
    return (
        <form onSubmit={this.handleSubmit} className={css.form}>
        <h2 className={css['input__title']}>Name</h2>
        <input
          className={css['input']}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <h2 className={`${css['input__title']} ${css['number']}`}>Number</h2>
        <input
          className={css['input']}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={(e) => this.setState({ number: e.target.value })}
        />

            <button className={css.button__add} type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
      contacts: PropTypes.array.isRequired,
      addContact: PropTypes.func.isRequired,      
};

export default ContactForm;