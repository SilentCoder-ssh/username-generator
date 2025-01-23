import DATA_USERNAME from "../data-username/data";
import randomElement from "./random-elements";
import { lengthLetter } from "../types/username";

export function generateUsername (lengthLetter: lengthLetter): string{
    const filtredRandomUsername: string[] = DATA_USERNAME.filter(word => word.length === lengthLetter)

    const username: string = randomElement(filtredRandomUsername)

    const usernameFinal: string = `${username}`;

    return usernameFinal
}