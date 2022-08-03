function shout(string){
    return string.toUpperCase();
}
shout ("hello");

function whisper(string){
    return string.toLowerCase();
}
shout ("HELLO");

function logShout(string){
    console.log(string.toUpperCase());
}
logShout("string");

function logWhisper(string){
    console.log(string.toLowerCase());
}
logWhisper("STRING");

function sayHiToHeadphonedRoommate(string){
    let cantAnswer= "I can't hear you!";
    let yesAnswer = "YES INDEED!";
    let lovAnswer = "I would love to!";
    if (string.toLowerCase(string)=== string) {return cantAnswer};
    if (string.toUpperCase(string)=== string) {return yesAnswer};
    if ("Let's have dinner together!") {return lovAnswer};
}
