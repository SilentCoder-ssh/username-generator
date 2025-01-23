import NUMBERS from "../constant/numbers";
import DATA_USERNAME from "../data-username/data";
import randomElement from "./random-elements";
import { lengthLetter,lengthNumber } from "../types/username";

function generateUsername (lengthLetter: lengthLetter, lengthNumber: lengthNumber): string{
    const filtredRandomUsername: string[] = DATA_USERNAME.filter(word => word.length === lengthLetter)
    let number: string = "";

    const username: string = randomElement(filtredRandomUsername)

    if(number.length != lengthNumber) {
      for (let i = 0; i < lengthNumber; i++) {
        number += randomElement(NUMBERS);
      }
    }
    
    const usernameFinal: string = `${username}${number}`;

    return usernameFinal
}

export const usernameFinalDisplay: string = generateUsername(5, 3)