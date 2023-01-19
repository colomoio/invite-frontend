import { UserType } from "../domain/User";
import { userRepository } from "../repositories/userRepository";

export function createUser(user: Partial<UserType>) {
  return userRepository.create(user);
}
