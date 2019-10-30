// lodash インスコが面倒だったので自前実装
// https://lodash.com/docs/4.17.15#indexOf
const _indexOf = (arr: any[], val: any, fromIndex = 0): number => {
  var rets: number[] = []
  arr.forEach((x: any, idx: number) => {
    if (x === val) { rets.push(idx) }
  })
  return rets.length === 0 ? -1 : rets[fromIndex]
}

interface SearchCondition {
  dateFrom?: string,
  dateTo?: string,
  amountFrom?: string,
  amountTo?: string,
  status?: string[],
  shopName?: string,
  categoryName?: string,
  scope?: boolean,
  ownerName?: string,
  sequenceNum?: string,
  exportLineId?: string,
  department?: string,
}

// this で参照されていたのでここに書く
const searchCondition: SearchCondition = {
  dateFrom: 'hoge',
  dateTo: 'hoge',
  amountFrom: 'hoge',
  amountTo: 'hoge',
  status: ['is_cat', 'is_dog'],
  shopName: 'hoge',
  categoryName: 'hoge',
  scope: false,
  ownerName: 'hoge',
  sequenceNum: 'hoge',
  exportLineId: 'hoge',
  department: 'hoge',
}

const setSearchConditions = (val: SearchCondition): SearchCondition => { return val }

// テストしやすいように void ではなく SearchCondition を返すように
const handleStatusChange = (checked: boolean, value: string): SearchCondition => {
    const filtered = searchCondition.status.filter((x: string) => x !== value || checked);
    const additional = checked && _indexOf(filtered, value) < 0;
    const status = additional ? [...filtered, value] : filtered;
    return setSearchConditions({ status });
  }

export default handleStatusChange
