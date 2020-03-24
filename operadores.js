/* =============================================================================
    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior Igual a (> =)
    <=      Menor Igual a (< =)
    ==      Igual a (= =)
    ===     Igual a do mesmo tipo (= = =)
    !=      Diferente de (! =)
    !==     Diferente, inclusive do tipo (! = =)

    ==========================================================================*/

    //DESAFIO 1
        const idade = 17;
    //Verificar se a pessoa é maior de 18 anos
    //Se sim, deixar entrar, se não, bloquear a entrada
        if(idade>=18){
            console.log('Pode entrar!')
        }
        else{
            console.log('Bloquear!')
        }
    //se a pessoa tiver 17 anos
    //avisar paro voltar quando fizer 18 anos
        if(idade == 17){
            console.log('Volte quando completar 18 Anos')
        }
        
/*==============================================================================
    OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras
    para que a condição final seja verdadeira.
    || "OU" Uma das condições devem ser verdadeira
    para que a condição final seja verdadeira.
    ! "NÃO" Nega uma condição

==============================================================================*/

    //REFATORANDO COM OPERADORES LÓGICOS
        //DESAFIO 1
            const idade = 18;
        //Verificar se a pessoa é maior de 18 anos
        //Se sim, deixar entrar, se não, bloquear a entrada
        //se a pessoa tiver 17 anos
        //avisar paro voltar quando fizer 18 anos
            if(!(idade>=18) || idade === 17){
                console.log('Bloquear! Volte quando tiver 18!')
            }else{
                console.log('Pode entrar!')
            }   

/*=============================================================================
        OPERADORES ARITMÉTICOS
        
        *   Multiplicação
        /   Divisão
        %   Resto da divisão
        +   Adição
        -   Subtração

=============================================================================*/

console.log(2*2); //4
console.log(2/2); //1
console.log(2%1.5); //0.5
console.log(2+2); //4
console.log(2-2); //0
