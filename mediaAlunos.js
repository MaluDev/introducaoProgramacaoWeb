//Criar um programa que calcula a média
//das notas entre os alunos e envia
//mensagem do cálculo da média
//Se a média for maior que 5, parabenizar a turma

//Vetores, armazenando objetos.
    const alunos = [
        {
            nome:"Malu",
            nota:9.8
        },
        {
            nome:"Mariana",
            nota:10
        },
        {
            nome:"Miguel",
            nota:2
        }
    ]

//Criando Objeto
    // const aluno01 = {
    //     nome:"Malu",
    //     nota:9.8
    // }
    
    // const aluno02 = {
    //     nome:"Mariana",
    //     nota:10
    // }

    // const aluno03 = {
    //     nome:"Miguel",
    //     nota:2
    // }

    //O objeto é sempre contado a partir do [0] dentro de um Array/Vetor 
        const media = (alunos[0].nota+alunos[1].nota+alunos[2].nota)/3;

//console.log(media);

if(media>5){
    console.log(`Parabéns turma!A média foi ${media}`)
}else{
    console.log('Turma a média foi abaixo do esperado!')
}