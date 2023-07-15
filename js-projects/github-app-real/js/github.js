class Github{
    constructor(){
        this.url = "https://api.github.com/users/"
    }

    async getGithubData(username){
     const userData = await (await fetch(`${this.url}${username}`)).json()
     const repoData = await (await fetch(`${this.url}${username}/repos`)).json()

     //const userData = await responseUser.json();
     //const repoData = await responseRepos.json();

     return{
        user: userData,
        repo: repoData
     }
    }
}