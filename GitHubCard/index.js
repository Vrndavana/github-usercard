/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

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



// Array of Git 
const followersArray = [
  'SethC16',
  'alecdye',
  'M-PAW',
  'AliciaPetgrave',
  'richknicks',
  'Vrndavana'
];
// ForEach
followersArray.forEach(user => {
  axios.get('https://api.github.com/users/' + user)
  .then( response => {
      entryPoint.append(createCard(response))
  })
  .catch( err => {
    console.log('Nothing to display.', err);
  })
})
// Page Target
const entryPoint = document.querySelector('.cards');
// Function
function createCard(userObj){
  const card = document.createElement('div'),
        userImg = document.createElement('img'),
        cardInfo = document.createElement('div'),
        name = document.createElement('h3'),
        username = document.createElement('p'),
        loc = document.createElement('p'),
        prof = document.createElement('p'),
        profLink = document.createElement('a'),
        foll = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p');
  // Classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  // Append
  card.append(userImg);
  card.append(username);
  card.append(cardInfo);
  cardInfo.append(name);
  cardInfo.append(username);
  cardInfo.append(loc);
  cardInfo.append(prof);
  cardInfo.append(foll);
  cardInfo.append(following);
  cardInfo.append(bio);
  // Text Content
  userImg.src = userObj.data.avatar_url;
  name.textContent = userObj.data.name;
  username.textContent = userObj.data.login;
  loc.textContent = userObj.data.location;
  prof.textContent = `Profile: `; 
  profLink.textContent = userObj.data.html_url;
  profLink.setAttribute('href', userObj.data.html_url);
  foll.textContent = `Followers: ${userObj.data.followers}`; 
  following.textContent = `Following: ${userObj.data.following}`;  
  bio.textContent = `Bio: ${userObj.data.bio}`;
//  Prof.Append ProfLink MUST BE UNDERNEATH TEXT CONTENT -JS- Cascades
   prof.append(profLink);
  return card;
}
