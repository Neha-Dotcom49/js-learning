function Player(fullName, totalRuns){
    this.fullName = fullName;
    this.totalRuns = totalRuns;
}
const kohli = new Player("Virat Kohli", 47000);
const rohit = new Player("Rohit Sharma", 30000);
const rishabh = new Player("Rishabh Pant", 50000);
const shami = new Player("Mohammad Shami", 1000);
Player.prototype.country = "India";

console.log(`${kohli.fullName}, ${kohli.totalRuns}, ${kohli.country}`);
console.log(`${rohit.fullName}, ${rohit.totalRuns}, ${rohit.country}`);
console.log(`${rishabh.fullName}, ${rishabh.totalRuns}, ${rishabh.country}`);
console.log(`${shami.fullName}, ${shami.totalRuns}, ${shami.country}`);