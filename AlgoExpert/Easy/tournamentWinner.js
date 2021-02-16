// There's an algorithms tournament taking place in which teams of programmers comete against each other to solve algorithmic problems as fast as possbile.
// Teams compete in a round robin, where each team faces off agasint all other teams, Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team.
// in each competition there's always one winner and one loser; there are no ties. A team received 3 points if it wins and 0 points if it loses. the winner of the tournament is the team that receives the most amount of points. 

// Given an array of pairs representing the teams that have cometed agaisnt each other and an array containing the results of each competition, write a function that returns the winner of the tournamnent.
// The input arrays are named "competiions" and results, resepectivly. THe competitions array has elemnts in the form of [homeTeam, awayTeam] where each team is a string of at most 30 characters represents
// the name of the team. The results array contains information aobut teh winner of each corresponding competition in the compeitions array. Specifically, results[i] denotes the winner of compeitions[i], where a 1 in the results
// array means that the home team in the corresponding competition won and a 0 means that the away team won. 

// it's guaranteed that exactly one team will win the tournament and that each team will comete against all other teams exactly once. It's also guaranteed that the tournament will alwyas have at least two teams. 


// Same run time as their solution, however I don't think my space is as good as theirs. Even though mine doesn't even allocate space for HTML, it still loops through the map at the end and uses two additional variables.

var competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

results = [0, 0, 1]


function winner(teams, results) {
    var map = {}
    for (var i = 0; i < teams.length; i++) {
        if(results[i] === 0) {
            map[teams[i][1]] = map[teams[i][1]] === undefined ? 3 : map[teams[i][1]] + 3
        }
        if(results[i] === 1) {
            map[teams[i][0]] = map[teams[i][0]] === undefined ? 3 : map[teams[i][0]] + 3
        }
    }
    var winningAmount = 0
    var winner = ""
    Object.entries(map).forEach(team => {
        if(team[1] > winningAmount) {
            winningAmount = team[1]
            winner = team[0]
        }
    })
    return winner
}

console.log(winner(competitions, results))