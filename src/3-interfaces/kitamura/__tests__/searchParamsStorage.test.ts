// app/frontend/javascripts/applications/transactions/utilities/searchParamsStorage.js
// 時間切れ(´・ω・`)
class SearchParamsStorage {
  private _data: string[]

  setItem(key, data) {
    // 適当な実装にする
  }
  getItem(key) {
    // 適当な実装にする
  }
​
  get data() {
    return this._data || this.getItem(this.key) || this.defaultData;
  }
​
  set data(params) {
    const newData = { ...params };
​
    this._data = newData;
    // 初期表示時は、並べ替え条件がリセットされるので、保存しない
    this.setItem(this.key, { ...omit(this._data, ['sort']) });
  }
​
  get defaultData() {
    return {
      status: ['default', 'waiting_for_worker', 'denied'],
      timeStampExistence: existenceConditions[0],
      timeStampValidation: validityConditions[0],
      shopName: '',
      categoryName: '',
      ownerName: '',
      sequenceNum: '',
      exportLineId: '',
      dateFrom: '',
      dateTo: '',
      amountFrom: '',
      amountTo: '',
      scope: false,
      departmentId: '',
      includeChildDepartment: true,
    };
  }

  private get key() {
    return ['expenses', 'searchCondition'];
  }
}
