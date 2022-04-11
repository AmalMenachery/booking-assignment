export type childrenAge = {
  id: string | number;
  age: number;
};

export type GuestDetail = {
  id: string | number;
  adults: number;
  children: number;
  childrenAges?: childrenAge[];
};
