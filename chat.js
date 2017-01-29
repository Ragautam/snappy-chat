ifUserIsLoggedIn(function() {
  updateUserData();

  loadUsers(function(users){
    var usersList = "";

    for(var uid in users) {
      var user = users[uid];

//if user is not current user than add it
      if(window.currentUser.id != uid){
      usersList += renderUser(user);
    }
    }

    getElement("members").innerHTML = usersList;
  });

  onClickMultiple("member", function(element) {
    var chat_id = element.id;

    loadMessages(chat_id, function(messages) {
      var messagesList = "";

      for(var uid in messages) {
        var message = messages[uid];
        messagesList += renderMessage(message);
      }

      getElement("messages").innerHTML = messagesList;
    });

    getElement("chat-id").value = chat_id;

  });

  click("send-button",function(){
    var text = getElement("message-text").value;
    var chat_id = getElement("chat-id").value;

    sendMessage(chat_id, text);

  });
});
