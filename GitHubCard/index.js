import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let response = ""
      function getURL (handle)
      {
        axios
          .get(`https://api.github.com/users/${handle}`)
          .then(res => {
            console.log(res)
            const newCard = createCard(res)
            //res.data.forEach()
            const cards = document.querySelector('div.cards')
            cards.appendChild(newCard)
          })
          .catch(err => {
            console.log(err)
          });
      } 
    
      
  getURL('ovenbakedgoods')

//console.log(getURL)

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
//const newCard = createCard(getURL)
//console.log(getURL)
//const cards = document.querySelector('div.cards')
//cards.appendChild(newCard)
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = 
[
  'tetondan','dustinmyers','justsml','luishrd','bigknell'
];

followersArray.forEach(e => 
  {
    getURL(e)
  })

function createCard (cardObject)
{
  const card = document.createElement('div')
  const imageUrl = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  card.classList.add('card')
  imageUrl.setAttribute('src', cardObject.data.avatar_url)
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')
  
  card.appendChild(imageUrl)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  profile.appendChild(address)

  name.textContent = cardObject.data.name
  userName.textContent = cardObject.data.login
  location.textContent = `Location: ${cardObject.data.location}`
  profile.textContent = `Profile:`
  address.setAttribute('href', cardObject.data.html_url)
  address.textContent = `Address to user's github page`
  followers.textContent = `Followers: ${cardObject.data.followers}`
  following.textContent = `Following: ${cardObject.data.following}`
  bio.textContent = `Bio: ${cardObject.data.bio}`
   
  return card
}
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

/*import axios from "axios";
function fetchDadJokes(url) {
  axios.get(url)
    .then((response) => {
      console.log(response.data.results);
      function myPrint(dadJoke) {
        console.log(dadJoke.name);
      }
      response.data.results.forEach(myPrint);
      const namesList = response.data.results.map((item) => item.name);
      console.log(namesList)
    })
  console.log("inside new file");
};
fetchDadJokes("");*/