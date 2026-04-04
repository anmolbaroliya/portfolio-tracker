export type Portfolio = {
  id: number;
  name: string;
  avatar: string;
};

export type CreatePortfolio= Omit<Portfolio,'id'>;
