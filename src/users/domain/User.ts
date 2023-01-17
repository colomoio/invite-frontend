export type UserType = {
  id?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  nickname: string;
};

class UserCreationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserCreationError";
  }
}

export function validateUser(user: UserType) {
  if (!user.nickname) {
    throw new UserCreationError("Email is required");
  }

  if (!user.email) {
    throw new UserCreationError("Nickname is required");
  }
}

export const User = (props: UserType) => {
  validateUser(props);

  return {
    ...props,
    getFullName() {
      if (!props.firstName || !props.lastName) {
        return props.nickname;
      }
      return `${props.firstName} ${props.lastName}`;
    },
  };
};
