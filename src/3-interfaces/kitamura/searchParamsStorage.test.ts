// app/frontend/javascripts/applications/transactions/utilities/searchParamsStorage.js
interface SearchParam {
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

class SearchParamsStorage {
  private _data: SearchParam;
  get data(): SearchParam {
    return this._data || this.defaultData;
  }
  setData(params) {
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

describe("SearchParamsStorage", () => {
  test("default data", () => {
    const storage: SearchParamsStorage = new SearchParamsStorage();

    expect(storage.data.status).toEqual([
      "default",
      "waiting_for_worker",
      "denied"
    ]);
    expect(storage.data.shopName).toEqual("");
    expect(storage.data.categoryName).toEqual("");
    expect(storage.data.ownerName).toEqual("");
    expect(storage.data.sequenceNum).toEqual("");
    expect(storage.data.exportLineId).toEqual("");
    expect(storage.data.dateFrom).toEqual("");
    expect(storage.data.dateTo).toEqual("");
    expect(storage.data.amountFrom).toEqual("");
    expect(storage.data.amountTo).toEqual("");
    expect(storage.data.scope).toBe(false);
    expect(storage.data.departmentId).toEqual("");
    expect(storage.data.includeChildDepartment).toBe(true);
  });

  test("set param", () => {
    const storage: SearchParamsStorage = new SearchParamsStorage();
    storage.setData({ scope: true });
    expect(storage.data.scope).toBe(true);
  });
});
