import { rest } from "../../core/services/rest";
import { readDoc } from "../../core/services/rest.utils";
import { User } from "../domain/User";

export const userRepository = {
  create: async (user: any) => {
    const res = await rest.post("/users", { body: user });
    const json = await res.json();
    const rawUser = readDoc(json.body);
    const createdUser = User(rawUser);

    return createdUser;
  },
};
