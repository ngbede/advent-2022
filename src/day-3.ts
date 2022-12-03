import * as fs from 'fs'
const filePath = 'dataset/day-3.txt'
const dataSet = fs.readFileSync(`../${filePath}`, 'utf-8')

const rucksacks = dataSet.split('\n')
const points: any = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

const calculate = (uniqeSet: Set<string>) => {
  let tally = 0
  uniqeSet.forEach(v => {
    const point = points[v]
    if (!point) {
      tally += points[v.toLowerCase()] + 26
    } else {
      tally += point
    }
  })
  return tally
}

// Ms. Oladajo please forgive me for I have sinned
let tally = 0
let tally2 = 0
let group = 0
let groupSacks = []
for (let i = 0; i < rucksacks.length; i++) {
  group++
  const itemPerCompartment = rucksacks[i].length / 2
  const toArray = rucksacks[i].split('')
  const compartment1 = toArray.slice(0, itemPerCompartment)
  const compartment2 = toArray.slice(itemPerCompartment, rucksacks[i].length)

  const duplicate: Set<string> = new Set()
  compartment1.forEach(c => {
    if (compartment2.includes(c)) {
      duplicate.add(c)
    }
  })
  tally += calculate(duplicate)

  // part 2
  groupSacks.push(toArray)
  if (group % 3 === 0) {
    const elf1 = groupSacks[0]
    const elf2 = groupSacks[1]
    const elf3 = groupSacks[2]
    const duplicate: Set<string> = new Set()
    elf1.forEach(s => {
      if (elf2.includes(s) && elf3.includes(s)) {
        duplicate.add(s)
      }
    })
    tally2 += calculate(duplicate)
    groupSacks = []
  }
}

console.log(tally)
console.log(tally2)
