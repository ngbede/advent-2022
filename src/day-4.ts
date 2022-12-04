import * as fs from 'fs'
const filePath = 'dataset/day-4.txt'
const dataSet = fs.readFileSync(`../${filePath}`, 'utf-8')

const sectionPairs = dataSet.split('\n')

const populateList = (pair: string) => {
  const rangeVal = pair.split('-')
  const assignedSections = []
  for (let i = parseInt(rangeVal[0]); i <= parseInt(rangeVal[1]); i++) {
    assignedSections.push(i)
  }
  return assignedSections
}

let overlaps = 0
let allOverLaps = 0
for (let i = 0; i < sectionPairs.length; i++) {
  const pair = sectionPairs[i].split(',')
  const elf1Sections = populateList(pair[0])
  const elf2Sections = populateList(pair[1])

  let big: number[] = []
  let small: number[] = []
  if (elf1Sections.length >= elf2Sections.length) {
    big = elf1Sections
    small = elf2Sections
  } else {
    big = elf2Sections
    small = elf1Sections
  }

  let containsAll
  const parts = []
  for (let j = 0; j < small.length; j++) {
    if (!big.includes(small[j])) {
      containsAll = false
      // PART 2: if you want to calculate the second half of the quiz correctly
      // simply comment out this break statement and run the script, it'll calculate the total pairs that overlap with no errors
      // draw back is that the first answer becomes wrong, but who cares...
      break
    } else {
      parts.push(small[j])
    }
    containsAll = true
  }
  allOverLaps += parts.length > 0 ? 1 : 0
  overlaps += containsAll ? 1 : 0
}

console.log(overlaps)
console.log(allOverLaps)
