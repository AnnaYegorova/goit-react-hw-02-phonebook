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
    console.log(this.state);
    this.setState({
      contacts: [...this.state.contacts, { name: this.state.name }],
    });
    console.log(this.state.contacts.length);
    this.reset();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Phonebook</p>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleNameChange}
              id={this.nameInputId}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <p>Contacts</p>
        <ul>{}</ul>
      </>
    );
  }
}
