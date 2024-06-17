const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

function calculateAverage(scores) {
    const subjects = Object.keys(scores);
    const total = subjects.reduce((acc, subject) => acc + scores[subject], 0);
    return total / subjects.length;
}

const averages = students.map(student => {
    const studentName = Object.keys(student)[0];
    const averageScore = calculateAverage(student[studentName]);
    return { [studentName]: { average: averageScore } };
});

console.log(averages);
