// app/frontend/javascripts/applications/transactions/transaction_searchbox.jsx
import SearchCondition from "./SearchCondition";

export default class SearchBox {
  searchCondition: SearchCondition;

  constructor() {
    this.searchCondition = {
      status: ["default", "applied"] // default value
    };
  }

  /**
   * @param {boolean} checked checked or not
   * @param {string} value input value
   */
  handleStatusChange(checked: boolean, value: string): void {
    const filtered: string[] = this.searchCondition.status.filter(
      x => x !== value || checked
    );
    const additional: boolean = checked && filtered.indexOf(value) < 0;
    const status: string[] = additional ? [...filtered, value] : filtered;
    this.setSearchConditions({ status });
  }

  private setSearchConditions(searchCondition: SearchCondition): void {
    this.searchCondition = searchCondition;
  }
}
