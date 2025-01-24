import { generateUsername } from "./username-generator";
import { generateCodeNumber } from "./numbers-generator";
import capitalize from "./capitalize";

export default function optionsManagement(array: string[]) {
  const sizeUsernameElement: HTMLInputElement = document.querySelector(
    "#size-username"
  )! as HTMLInputElement;
  const sizeUsername: number = Number(sizeUsernameElement.value);

  const sizeNumberElement: HTMLInputElement = document.querySelector(
    "#size-number"
  )! as HTMLInputElement;
  const sizeNumber: number = Number(sizeNumberElement.value);

  let word = generateUsername(sizeUsername);

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    if (currentElement === "normal") {
      word;
    }

    if (currentElement.includes("capitalize")) {
      word = capitalize(word);
    }

    if (currentElement.includes("number")) {
      word = `${word}${generateCodeNumber(sizeNumber)}`;
    }

    if (
      array.includes("normal") &&
      array.includes("capitalize") &&
      array.includes("number")
    ) {
      word = `${capitalize(word)}${generateCodeNumber(sizeNumber)}`;
    }
  }

  return word;
}