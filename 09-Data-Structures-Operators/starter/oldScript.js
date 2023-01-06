import {game} from '/game.js';

let [player1, player2] = game.players;
let [gk, ...fieldPlayers] = player1;  
let allPlayers = [...player1, ...player2];
let players1Final = [...player1, 'Thiago', 'Coutnho', 'Perisic'];
let {odds: {team1, team2, x:draw}} = game;
function printGoals(players) {
  console.log(`${players.length} goals were scored`);
}
team2 > team1 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

printGoals(game.scored);

const scored = game.scored;
for(let [goal, player] of scored.entries()) {
  console.log(`Goal ${goal+1}: ${player}`);
}
let average = 0;
let odds = Object.values(game.odds);
for(let odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

let oddsNames = Object.keys(game.odds);
for(let name of oddsNames) {
  const phrase = name === 'x' ? 'draw' : `victory ${game[name]}`;
  console.log(`Odds on ${phrase}: ${game.odds[name]}`);
}

const scores = {};
let gameResult = game.scored.sort();
for (let scoredPlayer of gameResult) {
  let goals = 0;
  for (let player of gameResult) {
    if(player === scoredPlayer) {
      goals++;
    }
  }
  scores[scoredPlayer] = goals;
}

console.log(scores);

