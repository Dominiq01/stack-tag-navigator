import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Skeleton } from "@mui/material";
import { useTagsContext } from "../../context/TagsContext";
import { TagItem } from "../../types/TagsTypes";

function createData(name: string, count: number) {
  return { name, count };
}

const TagTable = () => {
  const { tags, rowsPerPage, isLoading } = useTagsContext();

  const rows = tags?.map((tag: TagItem) => createData(tag.name, tag.count));

  const visibleRows = rows?.slice(0, rowsPerPage);

  return !isLoading ? (
    <TableContainer component={Paper} className="tag-table-container">
      <Table stickyHeader className="tag-table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ backgroundColor: "var(--color-background)" }}
              className="font-family"
            >
              Tag name
            </TableCell>
            <TableCell
              sx={{ backgroundColor: "var(--color-background)" }}
              className="font-family"
              align="right"
            >
              Questions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows?.map((row: TagItem) => (
            <TableRow key={row.name}>
              <TableCell className="font-family" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="font-family" align="right">
                <span className="table-count-label">{row.count}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Skeleton variant="rounded" width={740} height={400} style={{margin: '30px 0'}}/>
  );
};

export default TagTable;
