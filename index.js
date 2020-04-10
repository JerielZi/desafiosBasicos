const classA = [
  {
    name: "Paulo",
    score: 2.8
  },
  {
    name: "Ana",
    score: 10
  },
  {
    name: "Bruno",
    score: 2
  },
  {
    name: "One more student",
    score: 9
  }
]

const classB = [
  {
    name: "Maria",
    score: 8
  },
  {
    name: "Pedro",
    score: 6
  },
  {
    name: "Beatriz",
    score: 2
  },
  {
    name: "Novo Student",
    score: 5
  }
]

function calculateAverage(students) {
  let sum = 0
  for (let i = 0; i < students.length; i++) {
    sum += students[i].score
  }
  const average = sum / students.length

  return average
}

function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} average: ${average}. Congrats!`)
  } else {
    console.log(`${turma} average: ${average}. It's below 5, You guys can improve.`)
  }
}

function markAsFlunked(student) {
  student.flunked = false;

  if (student.score < 5) {
    student.flunked = true
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`The Student ${student.name} has flunked!`)
  }
}

function studentsReprovado(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student)
  }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'ClassA')
sendMessage(average2, 'ClassB')

studentsReprovado(classA)
studentsReprovado(classB)
