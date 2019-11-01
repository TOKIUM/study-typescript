// app/frontend/javascripts/applications/transactions/utilities/searchParamsStorage.js
import SearchParam from "./searchParam";

export default class SearchParamsStorage {
  private _data: SearchParam;
  get data(): SearchParam {
    return this._data || this.defaultData;
  }
  setData(params): void {
    this._data = { ...this._data, ...params };
  }
  get defaultData(): SearchParam {
    return {
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
  }
}