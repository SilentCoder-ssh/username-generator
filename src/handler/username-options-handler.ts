import optionsManagement from "../shared/utils/options-management";

export default function usernameOptionsHandler() {
  const checkUsernameOptions = document.querySelectorAll("[type=checkbox]");

  const usernameSize: HTMLInputElement =
    document.querySelector("#size-username")!;
  const usernameValue: HTMLElement = document.querySelector(
    "#size-username-span"
  )!;

  const numberSize: HTMLInputElement = document.querySelector("#size-number")!;
  const numberValue: HTMLElement = document.querySelector("#size-number-span")!;

  const usernameOutput: HTMLInputElement =
    document.querySelector("#username-output")!;
  const generate = document.querySelector("#generate");

  usernameSize?.addEventListener("change", (_) => {
    usernameValue.textContent = usernameSize.value;
  });

  numberSize?.addEventListener("change", (_) => {
    numberValue.textContent = numberSize.value;
  });

  generate?.addEventListener("click", (_) => {
    const checkUsernameContent: any = [...checkUsernameOptions];
    let results = ["normal"];

    for (let i = 0; i < checkUsernameContent.length; i++) {
      if (checkUsernameContent[i].checked) {
        results.push(checkUsernameContent[i].id);
      }
    }

    usernameOutput.value = optionsManagement(results);

    if (usernameOutput.classList.contains("focus:ring-green-500")) {
      usernameOutput.classList.remove("focus:ring-green-500");
      usernameOutput.classList.add("focus:ring-purple-500");
    }
  });
}