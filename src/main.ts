import './shared/styles/output.css'
import './shared/data-username/data'
import { generateUsername } from "./shared/utils/username-generator";
import { generateNumbers } from './shared/utils/numbers-generator';
import firstLetterUppercase from "./shared/utils/first-letter-upper";

console.log("generateUsername : ", generateUsername(6));

console.log("generateNumbers : ", generateNumbers(4))

console.log(
  "avec firstLetterUppercase : ",
  firstLetterUppercase(generateUsername(6) + generateNumbers(4))
);