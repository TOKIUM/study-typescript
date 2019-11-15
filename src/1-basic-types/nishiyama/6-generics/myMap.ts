class MyMap<K, V> {
  private keys = [] as K[];
  private values = [] as V[];

  add(key: K, value: V): void {
    this.keys.push(key);
    this.values.push(value);
  }

  remove(key: K): void {
    const index = this.keys.indexOf(key);

    if (index === -1) {
      return;
    }

    this.keys = this.keys.filter((key, idx) => {
      return idx !== index;
    });
    this.values = this.values.filter((value, idx) => {
      return idx !== index;
    });
  }

  getValueOf(key: K): V {
    const index = this.keys.indexOf(key);

    if (index === -1) {
      return null;
    }

    return this.values[index];
  }

  getCount(): number {
    return this.keys.length;
  }
}

export default MyMap;
