import { rest } from "../../core/services/rest";
import { readDoc } from "../../core/services/rest.utils";
import { User, UserType } from "../domain/User";

export const userRepository = {
  create: async (user: Partial<UserType>) => {
    const res = await rest.post("/users", { body: user });
    const json = await res.json();
    const rawUser = readDoc(json);
    const createdUser = User(rawUser);

    return createdUser;
  },
};
