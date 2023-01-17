import { userRepository } from "../repositories/userRepository";

export function createUser(user: any) {
  return userRepository.create(user);
}
