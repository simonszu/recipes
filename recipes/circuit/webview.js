"use strict";

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    // Initialize empty vars
    var unread = 0;
    var match = [];
    // Get value of <title> tag where in case of new messages the number of messages appear
    const titleValue = document.querySelector('title').text;
    // Extract the number from the tag
    match = titleValue.match(/\d+/);
    // Some logic to handle the match groups
    unread = match != null && match.length > 0 ? match[0] : 0;
    // Set unread msgs badge
    Ferdi.setBadge(Number.parseInt(unread, 10));
  };

  const loopFunc = () => {
    getMessages();
  };

  Ferdi.loop(loopFunc);

};