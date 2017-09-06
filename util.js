var slack = require("slack");
var token = "xoxb-236807183575-aq5oKS8JZb66T384LxXJrvx0";

var util = {};

util.sendMessage = function(channel, text) {
    slack.chat.postMessage({
        token: token,
        channel: channel,
        text: text
    }, function(err, data) {
        if (err) {
            console.log(err);
        }
    });
};


module.exports = util;
