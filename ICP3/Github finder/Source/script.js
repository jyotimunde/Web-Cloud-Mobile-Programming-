function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)

    let oReq = new XMLHttpRequest();
    let url = "https://api.github.com/search/users?q=" + user;
    oReq.open("GET",url,false);
    oReq.send();

return oReq;
}
function showUser(user) {

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    let avatar = document.createElement('img');
    avatar.src = user["items"][0]["avatar_url"];
    let div = document.getElementById("avatar");
    div.append(avatar);
    let information = document.getElementById("information");
    let text = "";
    for (let key in user["items"][0]) text += key + ": " + user["items"][0][key] + "<br>";
    information.innerHTML = text;
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    document.querySelector('h2').innerHTML = username +'user not found';
    document.getElementById('avatar').innerHTML = '';
    document.getElementById('information').innerHTML = '';
}

    $(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
