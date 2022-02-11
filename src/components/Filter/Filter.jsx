import { SearchInput, FilterWrapper } from './FilterStyled';
import { LabelStyled } from 'components/ContactForm/ContactFormStyled';
import { setFilter } from 'redux/PhonebookActions';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <FilterWrapper>
      <LabelStyled htmlFor="filter">Find contacts by name</LabelStyled>
      <div>
        <SearchInput name="filter" type="text" onChange={handleChange} />
      </div>
    </FilterWrapper>
  );
};
