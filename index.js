const User = require('./user')
const Video = require('./video')

const kaan = new User('Kaan', 1)
const efe = new User('Efe', 2)
const ahmet = new User('Ahmet', 3)
const mustafa = new User('Mustafa', 4)

kaan.subscribe(efe)
kaan.subscribe(ahmet)
kaan.subscribe(mustafa)


function printChannelName(user){
    console.log(user.channelName)
}

function printSubscribedChannels(user){
    console.log("Subscribed Channels:\n")
    user.subscribedChannels.forEach(printChannelName);
}

printSubscribedChannels(kaan)



const video1 = new Video("Demo Video", "Education", "demonstration video", 15)

function printVideoName(video){
    console.log(video.title)
}

function printVideos(user){
    console.log("Videos on the channel:\n")
    user.videos.forEach(printVideoName)
}


printVideos(kaan)


/*2-3 tane obje-sınıf ve bunların birbirleri arasında interaksiyonlar

en az 2 tane sınıf
    +user
    -video
    +subscription
en az 2 tane aksiyon
    +subscribe() 
    -uploadVideo()

user/chanel
video
subscription
reply
history
feeling/rating
comments
category



*/