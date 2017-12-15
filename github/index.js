
const getUser=(info)=>{
	let username = document.getElementById("username").value
	let divdemo = document.getElementById("infoUser")
	let imgAvatar = document.getElementById("imgAvatar")
	let userName = document.getElementById("userName")
	let userLogin = document.getElementById("userLogin")
	let userBio = document.getElementById("userBio")
	let repos = document.getElementById("repos")
	let containList = document.getElementById("containList")
	let containError = document.getElementById("containError")
     
    imgAvatar.src = info.avatar_url;
	userName.innerHTML= info.name
	userLogin.innerHTML= `@${info.login}`
	userBio.innerHTML = info.bio
	repos.removeAttribute("hidden")
	containList.removeAttribute("hidden")
	containError.setAttribute("hidden","")
    username = ''
}

const getRepositories=(info)=>{
	removeElementsByClass()
	let reposInfo = info
	let ulRepos = document.getElementById("ulRepos")
	ulRepos.removeAttribute("hidden")
	
	return reposInfo.map((repo) => {

		let list = document.createElement("li")
		let divContain = document.createElement("div")
		let stars = document.createElement("p")
		let forks = document.createElement("p")
		
		list.id = 'repoList'
		list.className = 'repoList'
		stars.className = 'stars'
		forks.className = 'forks'
		divContain.className = 'divContainpng'

		list.innerHTML = repo.name
		stars.innerHTML = `★${repo.stargazers_count}`
		forks.innerHTML = `☋${repo.forks_count}`
		
		ulRepos.appendChild(list)
		list.appendChild(divContain)
		divContain.appendChild(stars)
		divContain.appendChild(forks)
	})
	ulRepos.removeAttribute('hidden')
}

const getError=()=>{
	console.log('getError')
	let containError = document.getElementById("containError")
	let username = document.getElementById("username").value
	let repos = document.getElementById("repos")
	let containList = document.getElementById("containList")
	let ulRepos = document.getElementById("ulRepos")
	let list = document.getElementsByClassName("repoList")

	containError.removeAttribute('hidden')
	repos.setAttribute("hidden",'')
	containList.setAttribute("hidden",'')
	ulRepos.setAttribute("hidden",'')
	username=''
	removeElementsByClass()
}

const removeElementsByClass=()=>{
    var list = document.getElementsByClassName('repoList');
    while(list.length > 0){
        list[0].parentNode.removeChild(list[0]);
    }
}