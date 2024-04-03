import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTagsContext } from "../../context/TagsContext";

const selectedStyles = {
  backgroundColor: "var(--orange-700) !important",
  color: "white",
  "&:hover": {
    backgroundColor: "var(--orange-800) !important",
  },
};

const inputStyles = {
  "&.Mui-focused": {
    color: "var(--orange-700)",
  },
};

const selectStyles = {
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--orange-700)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--orange-700)",
  },
};

const hoverStyles = {
  "&:hover": {
    backgroundColor: "var(--orange-800)",
    color: "white",
  },
};

const SortSelect = () => {
  const { sortBy, setSortBy } = useTagsContext();

  const handleChangeSort = (event: SelectChangeEvent<string>) => {
    if (!event.target.value) return;
    setSortBy(event.target.value as string);
  };

  return (
    <FormControl>
      <InputLabel id="select-label" sx={inputStyles}>
        Sort by
      </InputLabel>
      <Select
        labelId="select-label"
        id="simple-select"
        value={sortBy}
        label="Sort by"
        onChange={handleChangeSort}
        size="small"
        className="font-family"
        sx={selectStyles}
      >
        {["popular", "name", "activity"].map((option) => (
          <MenuItem
            className="font-family"
            key={option}
            value={option}
            sx={sortBy === option ? selectedStyles : hoverStyles}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortSelect;
