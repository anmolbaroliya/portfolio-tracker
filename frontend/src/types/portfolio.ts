export type Portfolio = {
  id: number;
  name: string;
  avatar: string;
  amount?:number;
};

export type CreatePortfolio= Omit<Portfolio,'id'>;
