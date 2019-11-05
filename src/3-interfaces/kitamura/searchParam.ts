export default interface SearchParam {
  status: string[];
  shopName: string;
  categoryName: string;
  ownerName: string;
  sequenceNum: string;
  exportLineId: string;
  dateFrom: string;
  dateTo: string;
  amountFrom: string;
  amountTo: string;
  scope: boolean;
  departmentId: string;
  includeChildDepartment: boolean;
}
