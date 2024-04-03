import { Box, Skeleton, useMediaQuery, useTheme } from "@mui/material";
import { useTagsContext } from "../../context/TagsContext";
import RowsPerPageInput from "./RowsPerPageInput";
import OrderToggle from "./OrderToggle";
import SortSelect from "./SortSelect";
import "../../index.css";

const innerBoxStyles = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  justifyContent: "flex-end",
};

const TableConfigPanel = () => {
  const { isLoading } = useTagsContext();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const outerBoxStyles = {
    display: "flex",
    justifyContent: isSmallScreen ? "center" : "space-between",
    alignItems: "center",
    gap: "1rem",
    mt: "3rem",
    flexDirection: isSmallScreen ? "column" : "row",
  };

  return !isLoading ? (
    <Box sx={outerBoxStyles}>
      <RowsPerPageInput />
      <Box sx={innerBoxStyles}>
        <SortSelect />
        <OrderToggle />
      </Box>
    </Box>
  ) : (
    <Skeleton variant="rounded" width={740} height={50} />
  );
};

export default TableConfigPanel;
