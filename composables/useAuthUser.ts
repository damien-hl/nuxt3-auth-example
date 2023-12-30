import type { UserWithoutPassword } from "~~/types";

export const useAuthUser = () => {
  return useState<UserWithoutPassword | null>("user", () => null);
};
