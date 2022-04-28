import propTypes from 'prop-types';
import {
  ContactUl,
  ContactItem,
  Span,
  BtnDelete,
} from '../ContactList/ContactList.styled';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactUl>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Span>{name} </Span> : <Span> {number}</Span>
          <Span>
            <BtnDelete type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </BtnDelete>
          </Span>
        </ContactItem>
      ))}
    </ContactUl>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeleteContact: propTypes.func.isRequired,
};
