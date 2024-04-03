import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTags } from "../../services/apiTags";

export const useTags = (order = "desc", sort = "popular", page = 1, totalPages = 0) => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["tags", order, sort, page],
    queryFn: () => fetchTags(order, sort, page),
  });

  if (page < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["tags", order, sort, page + 1],
      queryFn: () => fetchTags(order, sort, page + 1),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["tags", order, sort, page - 1],
      queryFn: () => fetchTags(order, sort, page - 1),
    });
  }

  return { data, error, isLoading };
}

