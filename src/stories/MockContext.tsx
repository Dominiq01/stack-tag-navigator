import { useEffect, useState } from "react";
import { TagsContext } from "../context/TagsContext";

export const MockContextProvider: React.FC<any> = ({ children, initialValues }) => {
  const [sortBy, setSortBy] = useState(initialValues.sortBy);
  const [rowsPerPage, setRowsPerPage] = useState(initialValues.rowsPerPage);
  const [order, setOrder] = useState(initialValues.order);
  const [page, setPage] = useState(initialValues.page);

  useEffect(() => {
    setOrder(initialValues.order);
    setPage(initialValues.page);
    setSortBy(initialValues.sortBy);
    setRowsPerPage(initialValues.rowsPerPage);
  }, [initialValues]);

  return (
    <TagsContext.Provider value={{ 
      tags: initialValues.tags,
      sortBy,
      setSortBy,
      order,
      setOrder,
      rowsPerPage,
      setRowsPerPage,
      page,
      setPage,
      totalPages: initialValues.totalPages,
      isLoading: initialValues.isLoading,
      error: initialValues.error,
  }}>
      {children}
    </TagsContext.Provider>
  );
};
