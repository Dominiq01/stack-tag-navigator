import { useQuery } from "@tanstack/react-query";
import { fetchTotalTags } from "../../services/apiTags";

export const useTotalTags = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["totalTags"],
    queryFn: () => fetchTotalTags(),
  });

  return { data, error, isLoading};
}

