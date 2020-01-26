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
var user1tie = database.ref("/users/1/tie");
var user2tie = database.ref("/users/2/tie");
var user1choice = database.ref("/users/1/choice");
var user2choice = database.ref("/users/2/choice");
var user1comment = database.ref("/users/1/comment");
var user2comment = database.ref("/users/2/comment");

//creating object of users
var user1 = false;
var user2 = false;
var player1 = {
    name: "",
    win: 0,
    loss: 0,
    tie: 0,
    choice: $("<img>"),
    turn: false
};
var player2 = {
    name: "",
    win: 0,
    loss: 0,
    tie: 0,
    choice: $("<img>"),
    turn: false
};

$(document).ready(function (){
    $(".slotsFull").hide();
    $(".message").hide();
    $(".firstPlayer").hide();
    $(".secondPlayer").hide();
});

$(document).on("click", "#addUser", function () {
    if (!user1){
        readyPlayerOne();
    }
    else if (!user2){
        $("#username").show();
        readyPlayerTwo();
    }
    else{
        $("#slotsFull").show();
    }
});

function choice(){
    $(document).on("click", "#rock", function() {
        console.log("rock chosen");
    });

    $(document).on("click", "#paper", function() {
        console.log("paper chosen");
    });

    $(document).on("click", "#scissor", function() {
        console.log("scissor chosen");
    });
}

function readyPlayerOne(){
    player1.name = $("#userInput").val().trim();
    // console.log("user1: " + player1.name);
    $(".firstPlayer").show();
    $("#choices").hide();
    $("#user1").text(player1.name + " is player 1....Waiting on player 2");
    user1 = true;
    player1.turn = true;
    database.ref("/users/1/").set({
        name: player1.name,
        wins: player1.win,
        loss: player1.loss,
        tie: player1.tie
    });
    $("userInput").val("");
    $("#username").hide();
    gameLog();
}

function readyPlayerTwo(){
    player2.name = $("#userInput").val().trim();
    user2 = true;
}

function gameLog() {

}