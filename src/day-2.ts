import * as fs from 'fs'
const filePath = 'dataset/day-2.txt'
const dataSet = fs.readFileSync(`../${filePath}`, 'utf-8')

const games = dataSet.split('\n')
const itemPoint: any = { X: 1, Y: 2, Z: 3 } // lose, draw, win
const outcomes = [
  // DRAWS
  ['A', 'X'],
  ['B', 'Y'],
  ['C', 'Z'],
  // DEFEATS
  ['A', 'Z'],
  ['B', 'X'],
  ['C', 'Y'],
  // VICTORY
  ['A', 'Y'],
  ['B', 'Z'],
  ['C', 'X']
]

const tallyPoints = (game: string[]) => {
  const index = outcomes.findIndex(f => f.toString() === game.toString())
  if (index <= 2) {
    return 3
  } else if (index > 2 && index <= 5) {
    return 0
  } else if (index > 5 && index <= 8) {
    return 6
  }
  return 0
}

let totalPoints = 0
let correctScore = 0
const drawer = outcomes.slice(0, 3)
const loser = outcomes.slice(3, 6)
const winner = outcomes.slice(6, 9)

for (let i = 0; i < games.length; i++) {
  if (games[i].length === 3) {
    const game = games[i].split(' ')
    const j = game[1]
    totalPoints += tallyPoints(game) + itemPoint[j]

    // part 2
    if (game[1] === 'X') {
      // lose
      const whatToPlay = loser.find(g => g[0] === game[0])
      correctScore += 0 + itemPoint[whatToPlay![1]]
    } else if (game[1] === 'Y') {
      // you draw
      const whatToPlay = drawer.find(g => g[0] === game[0])
      correctScore += 3 + itemPoint[whatToPlay![1]]
    } else {
      // you win
      const whatToPlay = winner.find(g => g[0] === game[0])
      correctScore += 6 + itemPoint[whatToPlay![1]]
    }
  }
}

console.log(totalPoints)
console.log(correctScore)
