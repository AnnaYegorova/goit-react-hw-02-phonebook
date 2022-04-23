import { Component } from 'react';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  nameInputId = nanoid();

  handleNameChange = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, id: nanoid(8) },
      ],
    }));
    // console.log(this.state.contacts.id);
    // console.log(this.state.contacts.length);
    this.reset();
  };

  render() {
    console.log(this.state.contacts);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Phonebook</p>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <p>Contacts</p>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>name:{contact.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
