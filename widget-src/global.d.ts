type Button = { name: string; handler: () => void };

type NumVal = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type CountVal = 2 | 4;
type ColorVal = "red" | "green" | "yellow" | "purple";
type TypeVal = "number" | "add" | "reverse" | "universal" | "ban"

type NumCardType = {
  type: "number",
  num: NumVal,
  color: ColorVal
}
type ReverseType = {
  type: "reverse",
  color: ColorVal
}
type UniversalType = {
  type: "universal"
}
type AddType = {
  type: "add",
  color: ColorVal,
  count: CountVal
}
type BanType = {
  type: "ban",
  color: ColorVal
}

type CardType = NumCardType | ReverseType | UniversalType | AddType | BanType