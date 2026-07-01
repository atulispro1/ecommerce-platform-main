const persianDigits = [
  "\u06f0",
  "\u06f1",
  "\u06f2",
  "\u06f3",
  "\u06f4",
  "\u06f5",
  "\u06f6",
  "\u06f7",
  "\u06f8",
  "\u06f9",
];

export const changeNumbersFormatEnToFa = (number: number | string) =>
  number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[Number(digit)] ?? digit);
