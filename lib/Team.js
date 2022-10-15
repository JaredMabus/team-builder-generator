const renderHTML = require("../lib/generateHtml");

// Create Team class
class Team {
    constructor(name = "New Team") {
        this.name = name.toString();
        this.members = [];
    }

    // Add member to the team
    addMember(newMember) {
        this.members.push(newMember)
    };

    // Generate html card Method
    generateHTML() {
        if (this.members === 0) {
            console.log("No employees on this team")
        };
        renderHTML(this);
    }

}

module.exports = Team