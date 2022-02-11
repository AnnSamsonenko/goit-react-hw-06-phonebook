import { Item } from './ContactsItemStyled';
import { Button } from 'components/Button/Button';
import propTypes from 'prop-types';
import { remove } from 'redux/PhonebookActions';
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <span>{name}:</span>
      <span>{number} </span>
      <Button
        type="button"
        onClick={() => dispatch(remove(id))}
        text={'Delete'}
      />
    </Item>
  );
};

ContactsItem.propTypes = {
  contact: propTypes.object.isRequired,
};
