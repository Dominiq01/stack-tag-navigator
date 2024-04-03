import React, { createContext, useContext, useState } from "react";
import { useTags } from "../components/hooks/useTags";
import { useTotalTags } from "../components/hooks/useTotalTags";
import {
  TagsContextProviderType,
  TagsContextType,
} from "../types/TagsContextTypes";

const defaultContextValue: TagsContextType = {
  tags: [],
  sortBy: "popular",
  setSortBy: () => {},
  order: "desc",
  setOrder: () => {},
  rowsPerPage: 5,
  setRowsPerPage: () => {},
  page: 1,
  setPage: () => {},
  totalPages: 0,
  isLoading: false,
  error: null,
};

export const TagsContext = createContext(defaultContextValue);

const TagsContextProvider: React.FC<TagsContextProviderType> = ({
  children,
}) => {
  const [sortBy, setSortBy] = useState("popular");
  const [order, setOrder] = useState("desc");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const { data: totalTags, isLoading: isLoadingTotal, error: errorTotal } = useTotalTags();

  const totalPages = Math.ceil(totalTags / rowsPerPage);
  const {
    data: tags,
    error: errorTags,
    isLoading: isLoadingTags,
  } = useTags(order, sortBy, page, totalPages);
  
  const isLoading = isLoadingTags || isLoadingTotal;
  const error = errorTags || errorTotal;

  const contextValue = {
    tags,
    sortBy,
    setSortBy,
    order,
    setOrder,
    rowsPerPage,
    setRowsPerPage,
    page,
    setPage,
    totalPages,
    isLoading,
    error,
  };

  return (
    <TagsContext.Provider
      value={contextValue}
    >
      {children}
    </TagsContext.Provider>
  );
};

export default TagsContextProvider;

export const useTagsContext = () => {
  const context = useContext(TagsContext) as TagsContextType;
  if (!context) {
    throw new Error("useTagsContext must be used within a TagsProvider");
  }
  return context;
};
