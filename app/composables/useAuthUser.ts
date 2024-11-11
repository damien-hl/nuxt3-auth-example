import type { UserWithoutPassword } from "#shared/types";

export const useAuthUser = () => {
  return useState<UserWithoutPassword | null>("user", () => null);
};
