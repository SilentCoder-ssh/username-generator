async function fetchUsernames() {

const REQUEST_DATA = await fetch(
  "./src/shared/data-username/usernames.json"
);

console.log("request_data :", REQUEST_DATA);

const data_usernames: string[] = await REQUEST_DATA.json ()

console
  .log("data_username :", data_usernames)

  
    return data_usernames
}


const DATA_USERNAME: string [] = await fetchUsernames();

console.log("data_username :", DATA_USERNAME);

export default DATA_USERNAME;
