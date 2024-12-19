import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface User {
  id: string;
  name: string;
  email: string;
}

const fetchUser = async (id: string): Promise<User> => {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};

export const useUser = (id: string): UseQueryResult<User, Error> => {
  return useQuery<User, Error>({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
  });
};
