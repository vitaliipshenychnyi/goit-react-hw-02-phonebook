import {
  TitleFindInput,
  InputFindField,
} from './Filter.styled';

export const Filter = ({ contacts }) => (
  <>
    <TitleFindInput htmlFor="">
      Find contacts by name
      <InputFindField
        type="text"
        name="find"
        // value={this.state.find}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // onChange={this.handleChange}
      />
    </TitleFindInput>
  </>
);
