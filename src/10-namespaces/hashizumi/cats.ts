export interface NekoSpeech {
  nyanText(): string;
}

export class GenbaNeko implements NekoSpeech {
  nyanText(): string {
    return 'ヨシ！'
  }
}

export class DenwaNeko implements NekoSpeech {
  nyanText(): string {
    return 'どうして夜中に起きてるんですか？'
  }
}
