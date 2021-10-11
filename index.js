function getTeamMembers(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", displayTeamMembers);
    console.log("running")
    xhr.open("GET", 'https://coding-assignment.g2crowd.com/');
    xhr.send()
}

function reqListener () {
    console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://coding-assignment.g2crowd.com/");
  oReq.send();

// fetch("https://coding-assignment.g2crowd.com/")
// .then((response)=> {
//     response.json()
// }).then((data) => )


function displayTeamMembers(){
    const getTeamMembers = JSON.parse(this.responseText);
    const teamList = getTeamMembers.map((member,i) => {
      return (` <img src=${member.image_url}>
      <h2> ${member.name} </h2>
      <h2> ${member.title}</h2>
      <h2> ${member.bio}</h2>
      
      `)
    })
    
}