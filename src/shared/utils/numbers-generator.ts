import { NUMBERS } from "../constant/numbers";
import randomElement from "./random-elements";

export function generateCodeNumber(size: number): string {
  let number: string = "";

  if (number.length != size) {
    for (let i = 0; i < size; i++) {
      number += randomElement(NUMBERS);
    }
  }
  return number;
}