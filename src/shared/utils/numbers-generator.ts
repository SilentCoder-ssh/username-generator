import { lengthNumber } from './../types/username';
import randomElement from "./random-elements";
import NUMBERS from "../constant/numbers";


export function generateNumbers (lengthNumber: lengthNumber): string {
    let number: string = "";

        if (number.length != lengthNumber) {
          for (let i = 0; i < lengthNumber; i++) {
            number += randomElement(NUMBERS);
          }
        }

    return number
}