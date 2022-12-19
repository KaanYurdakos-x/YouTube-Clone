class Video{
    constructor(title, category, description, views = 0, duration) {
        this.title = title
        this.category = category
        this.description = description
        this.views = views
        this.duration = duration //min
        this.visibility = ['Public', 'Private', 'Unlisted']
    }
}


module.exports = Video