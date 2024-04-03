import { Box } from "@mui/material";
import { useTagsContext } from "../../context/TagsContext";
import { NumberInput } from "./NumberInput";

const boxStyles = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};
const RowsPerPageInput = () => {
  const { tags, rowsPerPage, setRowsPerPage } = useTagsContext();

  const handleChangeRowsPerPage = (value: number | null) => {
    if (!value) return;
    setRowsPerPage(value);
  };
  return (
    <Box sx={boxStyles}>
      <p style={{ color: "black" }}>Rows per page:</p>
      <NumberInput
        placeholder="Type a number…"
        value={rowsPerPage}
        onChange={(event: any, val: number | null) => handleChangeRowsPerPage(val)}
        min={1}
        max={tags?.length}
        className="font-family"
      />
    </Box>
  );
};

export default RowsPerPageInput;
