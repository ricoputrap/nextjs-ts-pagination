export type OtherPage = {
  page: number;
  url: string;
}

export type ResponseMultiple = {
  data: any[];
  totalItems: number;
  totalPages: number;
  prev?: OtherPage;
  next?: OtherPage;
}