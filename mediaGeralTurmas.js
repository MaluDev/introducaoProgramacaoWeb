//Criar um programa que calcula a média
//das turmas de students e envia
//mensagem do cálculo da média

//Vetores, armazenando objetos.
const classA = [
    {
        name:"Malu",
        grade:2
    },
    {
        name:"Mariana",
        grade:10
    },
    {
        name:"Miguel",
        grade:1
    },
    {
        name:"Lucas",
        grade:4
    }
]

const classB = [
    {
        name:"Victoria",
        grade:5
    },
    {
        name:"Bruno",
        grade:7
    },
    {
        name:"Nicolas",
        grade:2
    },
    {
        name:"Juliana",
        grade:10
    }
]

function calculateAverage(students){
    let sum = 0;
    for(let i = 0; i < students.length; i++){
        sum = sum + students[i].grade
    }
    const average = sum / students.length;
    return average;
}

function sendMessage(average, turma){

    if(average>5){
        console.log(`Congrats ${turma}! average:${average}`)
        }else{
        console.log(`${turma} average:${average}. Is not good!`)
        }
}

//O objeto é sempre contado a partir do [0] dentro de um Array/Vetor 
    // const average = (students[0].grade+students[1].grade+students[2].grade)/3;

//Marcar student como flunked se a grade for <5 e, também enviar uma mensagem

function markAsFlunked(student){
    student.flunked = false;
    if(student.grade < 5){
        student.flunked = true;
    }
}

function sendFlunkedMessage(student){
    if(student.flunked){
        console.log(`Student ${student.name} flunked!`)
    }
}

function studentsFlunked(students){
    for(let student of students){
       markAsFlunked(student);
       sendFlunkedMessage(student);
    }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, "Class A");
sendMessage(average2, "Class B");

studentsReprovado(classA)
studentsReprovado(classB)