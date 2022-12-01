import * as fs from 'fs'
const filePath = 'dataset/day-1.txt'
const dataSet = fs.readFileSync(`../${filePath}`, 'utf-8')

const allCalories = dataSet.split('\n')
const groupedCalories: number[] = []

// part 1: finding the elf with most calories
let total = 0
let maxElfCalories = 0
let maxElf = 0
for (let i = 0; i < allCalories.length; i++) {
  if (allCalories[i] !== '') {
    total += parseInt(allCalories[i])
  } else {
    groupedCalories.push(total)
    if (total >= maxElfCalories) {
      maxElfCalories = total
      maxElf = groupedCalories.length
    }
    total = 0
  }
}

// part 2: get the total calories from top 3 elves
groupedCalories.sort((a, b) => a - b)
const top1 = groupedCalories.pop()
const top2 = groupedCalories.pop()
const top3 = groupedCalories.pop()

const theTop3 = top1! + top2! + top3!
console.log(theTop3)
console.log(maxElfCalories)
console.log(maxElf)
