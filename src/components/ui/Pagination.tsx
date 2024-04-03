import { Pagination as MUIPagination, Skeleton } from "@mui/material";
import { useTagsContext } from "../../context/TagsContext";
import "../../index.css";

const Pagination = () => {
  const { totalPages, page, setPage, isLoading } = useTagsContext();

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return !isLoading ? (
    <MUIPagination
      className="pagination"
      count={totalPages}
      variant="outlined"
      shape="rounded"
      onChange={handleChangePage}
      defaultValue={1}
      page={page}
    />
  ) : (
    <Skeleton
      variant="rounded"
      width={390}
      height={50}
      style={{ margin: "0 auto" }}
    />
  );
};

export default Pagination;
