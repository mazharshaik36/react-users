import api from "@shared/api/axios";
import { type UsersResponse } from "@features/users/types/user";

const PAGE_SIZE = 10;

export const getUsers = async (
  page: number,
  search: string
): Promise<UsersResponse> => {
  const skip = (page - 1) * PAGE_SIZE;

  const endpoint = search
    ? "/users/search"
    : "/users";

  const response = await api.get(endpoint, {
    params: {
      limit: PAGE_SIZE,
      skip,
      ...(search && { q: search }),
    },
  });

  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await api.get(`/users/${id}`);

  return response.data;
};