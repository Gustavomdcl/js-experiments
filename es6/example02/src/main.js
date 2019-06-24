/* === ASYNC === */
if (false) {
  const minhaPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("OK");
      }, 2000);
    });

  minhaPromise()
    .then(response => {
      console.log(response);
    })
    .catch(err => {});
  //OU
  async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    const response = await minhaPromise();
    console.log(`ai que filha cheirosa ${response}`);
  }
  executaPromise();
  //OU
  const executaPromise2 = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
  };
  executaPromise2();
}
//AXIOS
import axios from "axios";
class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (err) {
      console.warn("Erro na API");
    }
  }
}
Api.getUserInfo("gustavomdcl");
Api.getUserInfo("babyfaced");
