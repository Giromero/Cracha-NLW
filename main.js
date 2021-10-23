const LinksSocialMedia = {
  github: 'Giromero',
  youtube: 'UC9HeGwBy17DqJWGxDJF2fKw',
  facebook: 'gislaine.romero.7',
  instagram: 'gi_romero_romero',
  twitter: 'RomeroGislaine'
}

function changeSocialMediaLinks() {

  for (let li of socialLinks.children) {
    
    const social = li.getAttribute('class')
     li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`          
    }
  }
changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
fetch(url)
.then(response => response.json()) 
.then(data => {
  userName.textContent = data.name
  userBio.textContent = data.bio
  userLink.href = data.html_url
  userPhoto.src = data.avatar_url
  userLogin.textContent = data.login
  })
}
getGitHubProfileInfos()

