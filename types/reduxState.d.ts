import { UserType } from "./user";

export type UserState = UserType & {
  isLogged: boolean;
};

/**공통 redux state */
export type CommonState = {
  validateMode: boolean;
};
