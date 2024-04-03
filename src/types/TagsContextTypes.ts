import { TagItem } from "./TagsTypes";

export type TagsContextType = {
  tags: TagItem[];
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  isLoading: boolean;
  error: Error | null;
};

export type TagsContextProviderType = {
  children: React.ReactNode;
};