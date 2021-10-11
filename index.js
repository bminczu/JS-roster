function getTeamMembers(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", displayTeamMembers);
    xhr.open("GET", '/team');
    xhr.send()
}