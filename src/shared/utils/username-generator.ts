import DATA_USERNAME from "../data-username/data";
import randomElement from "./random-elements";

export function generateUsername(size: number): string {
  const filtredRandomUsername: string[] = DATA_USERNAME.filter(
    (word) => word.length === size
  );
  const username: string = randomElement(filtredRandomUsername);
  const usernameFinal: string = `${username}`;

  return usernameFinal;
}