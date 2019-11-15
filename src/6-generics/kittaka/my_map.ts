interface Index {
  id: string;
}

class MyMap<K extends Index, V> {
  map: { [index: string]: { subject: K; object: V } }[];

  constructor(init_map: { [index: string]: { subject: K; object: V } }[]) {
    this.map = init_map || [];
  }

  // 登録
  registration(index: K, object: V): void {
    this.map.push({ [index.id]: { subject: index, object: object } });
  }
}
