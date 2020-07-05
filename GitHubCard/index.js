/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
.get('https://api.github.com/users/avawing')
.then(res => {let data = res
return data})
.catch(e => {console.log(`There was an error${e}`)});
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
createCard()
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:


    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard(obj){

  //create variables with textContent
  let card = document.createElement('div')
  let proimg =  document.createElement('img')
  let subdiv = document.createElement('div')
  let header = document.createElement('h3').textContent = obj.name
  let username = document.createElement('p').textContent = obj.login
  let location =document.createElement('p').textContent = obj.location
  let profile =document.createElement('p').textContent = `Profile: ${obj.html_url}`
  let link = document.createElement('a')
  let followers = document.createElement('p').textContent = `Followers: ${obj.followers}`
  let following = document.createElement('p').textContent = `Following: ${obj.following}`
  let bio = document.createElement('p').textContent = `Bio: ${obj.bio}`

  //set attributes
  card.setAttribute('class', 'card')
  proimg.setAttribute('src', obj.avatar_url)
  subdiv.setAttribute('class', 'card-info')

  //append children
  card.appendChild(proimg)
  card.appendChild(subdiv)

  subdiv.appendChild(header)
  subdiv.appendChild(username)
  subdiv.appendChild(location)
  subdiv.appendChild(profile)

  profile.appendChild(link)

  subdiv.appendChild(followers)
  subdiv.appendChild(following)
  subdiv.appendChild(bio)

  return document.querySelector('.cards').appendChild(card)
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
createCard(followersArray)