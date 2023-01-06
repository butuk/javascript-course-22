const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = new Set(gameEvents.values());
console.log([...events]);
gameEvents.delete(64);
let minutes = Array.from(gameEvents.keys());
let average = 0;
for(let i = 1; i < minutes.length; i++) {
  average += (minutes[i]-minutes[i-1]);
};
average = average/minutes.length;

console.log(`An event happened, in average, every ${average} minutes`);

for (let [minute, event] of gameEvents.entries()) {
  let half = minute <= 45 ? 'FIRST' : 'SECOND';
  console.log(`${half} HALF: ${minute}, ${event}`); 
}


