export enum Makurano {
  SPRING = '春は曙が遅いので寝る。めっちゃ寝る',
  SUMMER = '夏は夜とても暑いので、クーラーつけて寝る',
  AUTUMN = '秋は夕暮れがすぐ来るので、三度寝する',
  WINTER = '冬はつとめて布団が強いので、布団に負ける',
}

const Spring = {
  subjectNum: 1,
  text: Makurano.SPRING,
}

const Summer = {
  subjectNum: 2,
  text: Makurano.SUMMER,
}

const Autumn = {
  subjectNum: 3,
  text: Makurano.AUTUMN,
}

const Winer = {
  subjectNum: 4,
  text: Makurano.WINTER,
}

type Subject = {subjectNum: number, text: string}

const MakuranoBook: Subject[] = [
  Spring, Summer, Autumn, Winer,
];

// readof どこを読むか
const readAkebono = (readof: number): string => {
  const subject = MakuranoBook.find((subject: Subject) => {
    return subject.subjectNum === readof
  });

  return subject.text;
}

export default readAkebono;
