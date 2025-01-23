import './shared/styles/output.css'
import './shared/data-username/data'
import { usernameFinalDisplay } from './shared/utils/username-generator'
import firstLetterUppercase from './shared/utils/first-letter-upper';

console.log("usernameFinalDisplay : ", usernameFinalDisplay);

console.log("function uppercase : ", firstLetterUppercase(usernameFinalDisplay))