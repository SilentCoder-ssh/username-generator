async function fetchUsernames() {
  const REQUEST_DATA = await fetch("./src/shared/data-username/usernames.json");

  const data_usernames: string[] = await REQUEST_DATA.json();

  return data_usernames;
}

const DATA_USERNAME: string[] = await fetchUsernames();

export default DATA_USERNAME;