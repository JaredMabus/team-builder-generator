// Create Team class
class Team {
    constructor(name = "New Team") {
        this.name = name;
        this.members = [];
    }

    // Add member to the team
    addMember(newMember) {
        // console.log(this.name)
        this.members.push(newMember)
    };
}

module.exports = Team