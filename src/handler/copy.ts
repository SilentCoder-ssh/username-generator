export default function copy() {
  const copyText: HTMLButtonElement = document.querySelector("#copy-button")!;

  copyText?.addEventListener("click", (_) => {
    const usernameOutput: HTMLInputElement =
      document.querySelector("#username-output")!;

    const valueOutput = usernameOutput.value;

    if (usernameOutput) {
      usernameOutput.select();
      usernameOutput.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(valueOutput);

      usernameOutput.classList.remove("focus:ring-purple-500");
      usernameOutput.classList.add("focus:ring-green-500");
    }
  });
}