import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTagsContext } from "../../context/TagsContext";

const toggleButtonStyles = {
  "& .MuiToggleButtonGroup-grouped": {
    border: "0px solid var(--gray)",
    "&.Mui-selected": {
      backgroundColor: "var(--orange-700)",
      color: "white",
      "&:hover": {
        backgroundColor: "var(--orange-800)",
      },
    },
    "&:not(.Mui-selected)": {
      backgroundColor: "var(--color-background)",
    },
  },
};

const OrderToggle = () => {
  const { order, setOrder } = useTagsContext();

  const handleChangeOrder = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    if (!value) return;
    setOrder(value);
  };

  return (
    <ToggleButtonGroup
      value={order}
      exclusive
      onChange={handleChangeOrder}
      size="small"
      sx={toggleButtonStyles}
    >
      <ToggleButton className="font-family" value="desc">
        Desc
      </ToggleButton>
      <ToggleButton className="font-family" value="asc">
        Asc
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default OrderToggle;
