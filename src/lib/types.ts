export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
};

export interface UserListFilter {
  name: string;
  email: string;
  username: string;
  phone: string;
}
