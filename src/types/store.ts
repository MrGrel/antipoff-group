export interface IToken {
  token: string;
  isLoading: boolean;
  error: string;
}

export interface IPartners {
  idPartner: number;
  partner: IPartner | null;
  partners: IPartner[];
  page: number;
  isLoading: boolean;
  isLoadingMore: boolean;
  isLoadingPartner: boolean;
  error: string;
}

export interface IPartner {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
