interface Data {
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

export const default_data: Data = {
  status: ["default", "waiting_for_worker", "denied"],
  shopName: "",
  categoryName: "",
  ownerName: "",
  sequenceNum: "",
  exportLineId: "",
  dateFrom: "",
  dateTo: "",
  amountFrom: "",
  amountTo: "",
  scope: false,
  departmentId: "",
  includeChildDepartment: true
};

class SearchParamsStorage {
  _data: Data;

  constructor() {
    this._data = this.defaultData;
  }

  get data(): Data {
    return this._data || this.defaultData;
  }

  set data(params) {
    this._data = { ...params };
  }

  get defaultData(): Data {
    return default_data;
  }
}

export default SearchParamsStorage;
