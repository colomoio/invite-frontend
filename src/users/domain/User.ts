export type UserType = {
  id?: string;
  firstName: string;
  lastName: string;
  nickname: string;
};

export function validateUser(user: UserType) {
  if (!user.firstName) {
    throw new Error("First name is required");
  }
  if (!user.lastName) {
    throw new Error("Last name is required");
  }
  if (!user.nickname) {
    throw new Error("Nickname is required");
  }
}

export const User = (props: UserType) => {
  validateUser(props);

  return {
    ...props,
    get fullName() {
      return `${props.firstName} ${props.lastName}`;
    },
  };
};
