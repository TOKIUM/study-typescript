interface BirdProps {
  fly: () => string;
  getFeatherLength: () => number;
}

const defaultBirdProps = {
  fly: () => { return '飛び回り中...' },
  getFeatherLength: () => { return 10 },
}
export type DefaultBirdProps = Readonly<typeof defaultBirdProps>;

export default BirdProps;
