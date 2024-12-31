import type { User } from "#shared/types";

export const useAuthUser = () => {
  return useState<User | null>("user", () => null);
};
