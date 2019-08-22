/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
var data; 
axios.get("https://api.github.com/users/jennyobryant")
.then(function (response) {
  // handle success
  console.log(response);
  data = response; 
  let card = createCard(response.data); 
  document.querySelector(".cards").appendChild(card); 

});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"
];
followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
    .then(function (response) {
      // handle success
      let card = createCard(response.data); 
      document.querySelector(".cards").appendChild(card); 
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function createCard(props){
  let divCard = document.createElement("div");
  divCard.setAttribute("class", "card");

  let img = document.createElement("img");
  img.setAttribute("src", props.avatar_url);
  divCard.appendChild(img); 

  let divCardInfo = document.createElement("div");
  divCardInfo.setAttribute("class", "card-info");
  divCard.appendChild(divCardInfo);

  let h3 = document.createElement("h3"); 
  h3.setAttribute("class", "name");
  h3.textContent = props.name;
  divCardInfo.appendChild(h3);

  let pUsername = document.createElement("p"); 
  pUsername.textContent = props.login;
  pUsername.setAttribute("class", "username")
  divCardInfo.appendChild(pUsername);

  let pLocation = document.createElement("p")
  pLocation.textContent = `Location: ${props.location}`; 
  divCardInfo.appendChild(pLocation); 

  let pProfile = document.createElement("p")
  pProfile.textContent = "Profile: ";
  let a = document.createElement("a"); 
  a.setAttribute("href", props.html_url); 
  a.textContent = props.html_url; 
  pProfile.appendChild(a);
  divCardInfo.appendChild(pProfile);
  
  let pFollowers = document.createElement("p");
  pFollowers.textContent = `Followers: ${props.followers}`; 
  divCardInfo.appendChild(pFollowers); 

  let pFollowing = document.createElement("p");
  pFollowing.textContent = `Following: ${props.following}`; 
  divCardInfo.appendChild(pFollowing); 

  let pBio = document.createElement("p");
  pBio.textContent = `Bio: ${props.bio}`; 
  divCardInfo.appendChild(pBio); 

  return divCard; 
}