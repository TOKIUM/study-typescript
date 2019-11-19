interface CatProps {
  run: () => string;
  getBodyLength: () => number;
}

const defaultCatProps = {
  run: () => { return 'かけわまり中...' },
  getBodyLength: () => { return 100 },
}
export type DefaultCatProps = Readonly<typeof defaultCatProps>;

export default CatProps
