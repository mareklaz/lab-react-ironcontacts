import React, { Component } from 'react';
import ContactsRow from './ContactsRow/ContactsRow';
import contacts from "../../contacts.json";

class ContactsTable extends Component {
  state = {
    contacts: [...contacts].slice(0, 5) // con ... clonamos el array del objeto contacts
  }
  
  render() {
    const { contacts } = this.state
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact, index) => {
              return (
                <ContactsRow key={contact.id} {...contact} number={index + 1}/>
              )
            })
          }
        </tbody>
      </table>
    )
  }

} 

export default ContactsTable;