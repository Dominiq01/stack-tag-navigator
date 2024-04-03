import { useTagsContext } from "../../context/TagsContext";
import TableConfigPanel from "../ui/TableConfigPanel";
import Pagination from "../ui/Pagination";
import ErrorDisplay from "../ui/ErrorDisplay";
import TagTable from "./TagTable";
import SectionDescription from "../ui/SectionDescription";

function TagBrowser() {
  const { error } = useTagsContext();
  return (
    <>
      <SectionDescription
        title="Tags"
        description="Tags are keywords or labels that categorize content like questions and
        answers into specific topics, making it easier to organize, search, and
        discover relevant discussions."
        className="tags-description"
      />
      {!error ? (
        <>
          <TableConfigPanel />
          <TagTable />
          <Pagination />
        </>
      ) : (
        <ErrorDisplay errorMessage={error.message} />
      )}
    </>
  );
}

export default TagBrowser;
