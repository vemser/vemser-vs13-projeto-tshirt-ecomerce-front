import { TextField } from '@mui/material';
import { SearchInputProps } from '../../types/SearchInputProps';



function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder="O que você procura?"
      variant="outlined"
      size="small"
    />
  );
}

export default SearchInput;
