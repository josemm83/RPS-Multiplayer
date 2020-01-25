//intializing firebase info 
var config = {
    apiKey: "AIzaSyCWdHTWgKev827BvP7aM_UvvSyMJpnH_Ek",
    authDomain: "rps-multiplayer-5a178.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-5a178.firebaseio.com",
    projectId: "rps-multiplayer-5a178",
    storageBucket: "rps-multiplayer-5a178.appspot.com"
};

firebase.initializeApp(config);
var database = firebase.database();

//creating database
var playerConnections = database.ref("/connections");
var playerConnected = database.ref(".info/conncected");
var userList = database.ref("/users");
var user1 = database.ref("/users/1");
var user2 = database.ref("/users/2");
var user1name = database.ref("/users/1/name");
var user2name = database.ref("/users/2/name");
var user1win = database.ref("/users/1/wins");
var user2win = database.ref("/users/2/wins");
var user1loss = database.ref("/users/1/loss");
var user2loss = database.ref("/users/2/loss");
var user1choice = database.ref("/users/1/choice");
var user2choice = database.ref("/users/2/choice");
var user1comment = database.ref("/users/1/comment");
var user2comment = database.ref("/users/2/comment");

//creating object of users
var player1 = {
    name: "",
    win: 0,
    loss: 0,
    choice: null,
    turn: false
};
var player2 = {
    name: "",
    win: 0,
    loss: 0,
    choice: null,
    turn: false
};

$(document).ready(function (){
    $(".slotsFull").hide();
    $(".message").hide();
});