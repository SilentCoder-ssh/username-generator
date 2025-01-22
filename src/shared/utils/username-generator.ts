import NUMBERS from "../constant/numbers";
import DATA_USERNAME from "../data-username/data";
import randomElement from "./random-elements";
import { lengthLetter,lengthNumber } from "../types/username";

export default function generateUsername (lengthLetter: lengthLetter, lengthNumber: lengthNumber): string{
    const filtredRandomUsername: string[] = DATA_USERNAME.filter(word => word.length === lengthLetter)
    let number: string = "";
    
    console.log("filtredRandomUsername :", filtredRandomUsername);

    const username: string = randomElement(filtredRandomUsername)

    console.log("username : " + username)

    if(number.length != lengthNumber) {
      for (let i = 0; i < lengthNumber; i++) {
        number += randomElement(NUMBERS);
      }
    }
    
    console.log("Number généré = ", number);

    const usernameFinal: string = `${username}${number}`;

    console.log(usernameFinal);

    return usernameFinal
  
}

