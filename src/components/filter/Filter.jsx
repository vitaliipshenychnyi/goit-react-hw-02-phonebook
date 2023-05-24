import { TitleFindInput, InputFindField } from './Filter.styled';

export const Filter = ({ value, changeFilter }) => {
  return (
    <TitleFindInput htmlFor="">
      Find contacts by name
      <InputFindField type="text" value={value} onChange={changeFilter} />
    </TitleFindInput>
  );
};
