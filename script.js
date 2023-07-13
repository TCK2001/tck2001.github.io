window.addEventListener('DOMContentLoaded', function() {
    var accordion = document.querySelector('.accordion');
    accordion.style.display = 'none';
  });
  
  function toggleAccordion(index) {
    var panel = document.getElementsByClassName('accordion-panel')[index];
    panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
  }
  
  function toggleMenu() {
    var accordion = document.querySelector('.accordion');
    if (accordion.style.display === 'none') {
      accordion.style.display = 'block';
    } else {
      accordion.style.display = 'none';
    }
  }
  function submitChat() {
    var nicknameInput = document.getElementById("nickname-input");
    var chatInput = document.getElementById("chat-input");
    var messageList = document.getElementById("message-list");
  
    var nickname = nicknameInput.value;
    var chat = chatInput.value;
  
    if (nickname && chat) {
      var listItem = document.createElement("li");
      listItem.innerHTML = "<b>" + nickname + ":</b> " + chat;
      messageList.appendChild(listItem);
  
      nicknameInput.value = "";
      chatInput.value = "";
    }
  }