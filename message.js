let messageArray = [];

function addToLocal(content, date){
    let newMessage = {}
    newMessage.content = content;
    newMessage.date = date;
    
    messageArray.push(newMessage);

}
function updateStorage(){
    localStorage.message = JSON.stringify(messageArray)
}

function sentMessage(){
    let nowDate = new Date
    let massegeInut = document.getElementById("message-text").value;

    let OneDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    let dateInfoDiv = document.createElement('div');
    dateInfoDiv.className = "dateInfoStyle";
    OneDiv.className = "messageDiv"
    // OneDiv.id ="parentDiv";
    // dateInfoDiv.id = "showDate";
    

    messageDiv.className = "eachMessageStyle"
    messageDiv.innerHTML = `<p>${massegeInut}</p>`;
    dateInfoDiv.innerHTML = `<div>${nowDate.getHours()}:${nowDate.getMinutes()}</div>`;
    OneDiv.append(messageDiv, dateInfoDiv)
    let window = document.getElementById('window');
    window.append(OneDiv);
    let toDate = [nowDate.getHours(), nowDate.getMinutes()];
    addToLocal(massegeInut, toDate);
    updateStorage()

};