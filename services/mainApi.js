const getUserdata=()=>{
	let username = document.getElementById("username").value.replace(/\s/g,'')
	const url = `https://api.github.com/users/${username}`
	
	fetch(url).then(res=>{
		if (res.status !==200){console.log('There was a problem' + res.status)
			getError()
		return
		}
		res.json()
			.then(data=>{
				let reposUrl = data.repos_url
				getUser(data)
				letRepositories(reposUrl)
			})	
		})
	}

const letRepositories=(info)=>{
	let url = info
	fetch(url).then(res=>{
		if (res.status !==200){console.log('There was a problem' + res.status)
		return
		}
		res.json().then(data=>{
			getRepositories(data)
		})
	})
}

