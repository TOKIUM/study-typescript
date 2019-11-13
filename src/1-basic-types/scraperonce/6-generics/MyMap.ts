export default class MyMap<K, V> {
  private keys = [] as K[];
  private values = [] as V[];

  set(key: K, value: V) {
    const index = this.searchIndex(key);

    if (index === -1) {
      this.keys.push(key);
      this.values.push(value);
    } else {
      this.values[index] = value;
    }
  }

  get(key: K): V {
    const index = this.searchIndex(key);

    if (index === -1) {
      return null;
    } else {
      return this.values[index];
    }
  }

  remove(key: K): boolean {
    const index = this.searchIndex(key);

    if (index === -1) {
      return false;
    } else {
      this.keys = this.keys.slice(0, index).concat(this.keys.slice(index + 1))
      this.values = this.values.slice(0, index).concat(this.values.slice(index + 1))
      return true;
    }
  }

  getKeys(): K[] {
    return this.keys.concat();
  }

  private searchIndex(key: K): number {
    return this.keys.indexOf(key);
  }
}