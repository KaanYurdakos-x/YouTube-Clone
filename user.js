const Subscription = require('./subscription')

class User{
    constructor(channelName, channelId) {
        this.channelName = channelName
        this.channelId = channelId
        this.subscribedChannels = []
        this.subscribers = []
        this.videos = []
    }

    subscribe(subscribedChannel) {
        const subscription = new Subscription(subscribedChannel, this)
        this.subscribedChannels.push(subscribedChannel)
        subscribedChannel.subscribers.push(this)

        return subscription
    }

    uploadVideo(video) {
        this.videos.push(video)
    }
}



module.exports = User