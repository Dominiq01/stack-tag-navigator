import { API } from "./stackexchange";

export const fetchTags = async (order: string, sort: string, page: number) => {
  if (!order || !sort || !page) {
    throw new Error("Missing required parameters");
  }
  const res = await fetch(
    `${API}2.3/tags?page=${page}&order=${order}&sort=${sort}&site=stackoverflow`
  );
  const { items: data, error_id } = await res.json();
  console.log(error_id);
  console.log(data);

  if (error_id) {
    throw new Error("Error fetching tags");
  }

  return data;
};

export const fetchTotalTags = async () => {
  const res = await fetch(`${API}2.3/tags?site=stackoverflow&filter=total`);
  const { total: data, error_id } = await res.json();
  console.log(data);
  if (error_id) {
    throw new Error("Error fetching total number of tags");
  }
  return data;
};
