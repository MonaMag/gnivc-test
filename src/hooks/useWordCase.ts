import {DeclinationType} from "../redux/types/inflectionType";

type Rules = {[end: string]: [string, string, string, string, string]}

const oneEnd: Rules = {
  "а": ["ы", "е", "у", "ой", "е"],
  "й": ["я", "ю", "я", "ем", "е"],
  "о": ["а", "у", "о", "ом", "е"],
  "и": ["ей", "ям", "и", "ями", "ях"],
  "с": ["са", "су", "с", "сом", "се"],
  "ш": ["ша", "шу", "ш", "шом", "ше"],
  "я": ["и", "е", "ю", "ей", "е"],
  "ь": ["я", "ю", "ь", "ем", "е"],
  "б": ["ба", "бу", "ба", "бом", "бе"],
  "в": ["ва", "ву", "ва", "вом", "ве"],
  "м": ["ма", "му", "ма", "мом", "ме"],
  "г": ["га", "гу", "га", "гом", "ге"],
  "д": ["да", "ду", "да", "дом", "де"],
  "ж": ["жа", "жу", "жа", "жом", "же"],
  "з": ["за", "зу", "за", "зом", "зе"],
  "к": ["ка", "ку", "ка", "ком", "ке"],
  "н": ["на", "ну", "на", "ном", "не"],
  "п": ["па", "пу", "па", "пом", "пе"],
  "т": ["та", "ту", "та", "том", "те"],
  "ф": ["фа", "фу", "фа", "фом", "фе"],
  "ч": ["ча", "чу", "ча", "чом", "че"],
  "ц": ["ца", "цу", "ца", "цом", "це"],
  "щ": ["ща", "щу", "ща", "щом", "ще"],
  "л": ["ла", "лу", "ла", "лом", "ле"],
  "р": ["ра", "ру", "ра", "ром", "ре"],
  "х": ["ха", "ху", "ха", "хом", "хе"],
};
const twoEnd: Rules = {
  "ша": ["ши", "ше", "шу", "шой", "ше"],
  "жа": ["жи", "же", "жу", "жей", "же"],
  "ка": ["ки", "ке", "ку", "кой", "ке"],
  "ча": ["чи", "че", "чу", "чей", "че"],
  "ый": ["ого", "ому", "ого", "ым", "ом"],
  "чь": ["чи", "чи", "чь", "чью", "чи"],
  "шь": ["ши", "ши", "шь", "шью", "ши"],
  "дь": ["ди", "ди", "дь", "дью", "ди"],
  "ть": ["ти", "ти", "ть", "тью", "ти"],
  "ай": ["ая", "аю", "ай", "аем", "ае"],
  "рт": ["рта", "рту", "рт", "ртом", "рте"],
  "ст": ["ста", "сту", "ст", "стом", "сте"],
};
const threeEnd: Rules = {
  "уль": ["уля", "улю", "уль", "улем", "уле"],
  "удь": ["удя", "удю", "удь", "удем", "уде"]
};

type CassesType = {
  value: string;
  lable: string;
}

const casess: CassesType[] = [
  {value: "nominative", lable: 'Именительный'},
  {value: "genitive", lable: 'Родительный'},
  {value: "dative", lable: 'Дательный'},
  {value: "accusative", lable: 'Винительный'},
  {value: "instrumental", lable: 'Творительный'},
  {value: "prepositional", lable: 'Предложный'},
]

export const useWordCase = () => {

  const tryChangeEnd = (
    value: string,
    declination: DeclinationType,
    endCount: number,
    rules: Rules,): [boolean, string | null] => {
      
    const mainPart = value.slice(0, value.length - endCount);
    const endPart = value.slice(value.length - endCount);

    if (rules[endPart] === undefined) {
      return [false, null];
    }
    const nextEndIndex = casess.map(value => value.value).indexOf(declination);
    return [true, mainPart + rules[endPart][nextEndIndex - 1]]
  }

  const toCase = (value: string, declination: DeclinationType): string => {
    let [exists, nextValue] = tryChangeEnd(value, declination, 3, threeEnd);
    if (exists) {
      return nextValue as string;
    }

    [exists, nextValue] = tryChangeEnd(value, declination, 2, twoEnd);
    if (exists) {
      return nextValue as string;
    }

    [exists, nextValue] = tryChangeEnd(value, declination, 1, oneEnd);
    if (exists) {
      return nextValue as string;
    }
    
    else {
      return value
    }
  }

  return {toCase, casess}
}