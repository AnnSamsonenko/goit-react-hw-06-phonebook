import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import 'yup-phone';
import { useSelector, useDispatch } from 'react-redux';
import { add } from 'redux/PhonebookActions';
import { Button } from 'components/Button/Button';
import { FormStyled, Input, Message, LabelStyled } from './ContactFormStyled';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const validationSchema = yup.object({
  name: yup.string().required('required field'),
  number: yup
    .string()
    .required('required field')
    .matches(phoneRegExp, 'phone number is not valid')
    .min(6, 'to short')
    .max(15, 'to long'),
});

const initialValues = {
  name: '',
  number: '',
  filter: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <Message>{message}</Message>}
    />
  );
};

export const ContactForm = () => {
  const contacts = useSelector(state => state.phonebook.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isNameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contactObj = { id: nanoid(4), name, number };
    dispatch(add(contactObj));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
        <div>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <div>
            <Input name="name" type="text" />
            <FormError name="name" />
          </div>
        </div>
        <div>
          <LabelStyled htmlFor="number">Number</LabelStyled>
          <div>
            <Input name="number" type="tel" />
            <FormError name="number" />
          </div>
        </div>
        <Button type="submit" text={'Add contact'} />
      </FormStyled>
    </Formik>
  );
};
