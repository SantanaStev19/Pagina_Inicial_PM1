class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 1;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const activity = new Activity(this.id, title, description, imgUrl);
        this.activities.push(activity);
        this.id++;
    }

    deleteActivity(id) {
        this.activities = this.activities.filter((act) => act.id !== id);
    }
}




