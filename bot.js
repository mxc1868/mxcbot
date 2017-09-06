var slack = require("slack");
var bot = slack.rtm.client();
var token = "xoxb-236807183575-aq5oKS8JZb66T384LxXJrvx0";
var util = require("./util");
const {Wit} = require('node-wit');

const client = new Wit({
  accessToken: "V3EL23V3JX4X5W43BAFUFYOUO652DBJF",
});


const res = {
    "name": "My name is Xianchen Meng", 
    "major": "My major of Becholar's degree and Master's degree are both Computer Science",
    "favProgrammingLanguage": "My favorite programming language is Java",
    "from": "I am from Shanghai, China",
    "class": "My favorite class should be 'Algorithms and Data Structure'",
    "bestProgrammingLanguage": "I am proficient in Java", 
    "startProgramming": "I began to program 7 years ago when I studied in Beihang University", 
    "collegeLocation": "The university where I finished my Becholar's degree is located in Beijing, China and the university where I finished my Master's degree is located in Williamsburg, VA", 
    "englishName": "Just call me Max", 
    "growUp": "My hometown is in Henan Province and I grew up in Shanghai",
    "skills": "Programming Languages : Java, HTML, EJS, CSS, JavaScript, Smali;\n Libraries & Frameworks: JQuery, Bootstrap, Node.js, Express.js, Mongoose;\n Databases: Relational databases (MySQL, MS SQL Server), NoSQL (MongoDB)",
    "workingExp": "One year ago, I worked as Research Assistant in College of William and Mary, doing research on Android Security Area \n And years ago I worked as Software Engineer Intern in Shanghai Pugong environmental protection technology co., LTD, collaborating with the teammates to develop a system to automatically log and monitor status of smart meters", 
    "bestAt": "I am good at Algorithms, Data Structures, Web development",
    "gpa": "My GPA is 3.8",
    "cv": "Visit http://www.mxcmia.com/resume.html to see my resume", 
    "website": "my personal website is http://www.mxcmia.com and my LinkedIn is https://www.linkedin.com/in/xianchen-meng-a7a141115/"
}


bot.message(function(message) {
    var channel = message.channel;
    var user = message.username;
    var bot_id = message.bot_id;
    var text = message.text;
    if (user !== "bot" || (user === "bot" && bot_id !== "B6XNS4HTN")) {
        client.message(text, {})
        .then((data) => {
            var entities = data.entities;
            if (Object.keys(data.entities).length) {
                var curEn = entities[Object.keys(entities)[0]];
                var category = curEn[0].value;
                util.sendMessage(channel, res[category]);
            } else {
                util.sendMessage(channel, "I can't answer your question right now, please make it clear!");
            }
        })
        .catch(console.error);
    }
});
bot.channel_joined(function(message) {
    util.sendMessage(message.channel.id, "Hi there! MxcBot has joined in your channel! You can ask me questions right now!");
})

bot.listen({token: token});