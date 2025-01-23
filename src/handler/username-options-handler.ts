// import { generateUsername } from "./shared/utils/username-generator";
// import { generateNumbers } from "./shared/utils/numbers-generator";
// import firstLetterUppercase from "./shared/utils/first-letter-upper";

export default function usernameOptionsHandler () {
    const checkUsernameOptions = document.querySelectorAll("[type=checkbox]");
    
    const usernameSize:HTMLInputElement = document.querySelector("#length-range-username")!;
    const lengthUsernameValue: HTMLInputElement = document.querySelector(
      "#length-value-username"
    )!;

    const numberSize: HTMLInputElement = document.querySelector("#length-number-range")!;
    const lengthNumberValue: HTMLInputElement = document.querySelector("#length-value-number")!;
    
    const usernameOutput: any = document.querySelector("#username-output")
    const generate = document.querySelector("#generate")
    const copy = document.querySelector("#copy-button")

    usernameSize?.addEventListener ("change", _ => {
        lengthUsernameValue.textContent = usernameSize.value
    })

    numberSize?.addEventListener ("change", _ => {
        lengthNumberValue.textContent = numberSize.value
    })

    generate?.addEventListener("click", _ => {
        console.log(checkUsernameOptions.values(), checkUsernameOptions)
    })





}