export enum Fields {
  EMAIL = "email",
  PASSWORD = "password",
}

export const INITIAL_SIGN_IN_VALUES: Record<Fields, string> = {
  [Fields.EMAIL]: "",
  [Fields.PASSWORD]: "",
};
