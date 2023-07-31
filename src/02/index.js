const express = require('express')

const app= express()

const rodando = false;
const minutos = 0;
const segundos = 0;

let sentIntervaloDisparado = false;

function iniciarCronometro() {
    rodando = true;

    if (!sentIntervaloDisparado) {
        setInterval(() => {
            if(segundos === 59) {
                segundos = 0;
                minutos++
            } else {
                segundos++
            }
        }, 1000)

        sentIntervaloDisparado = true;
    }
}

app.get('/',(req, res) => {

    return res.send(`Tempo atual do cronometo: ${minutos.toString().padStart()} minutos e ${segundos.toString().padStart()} segundos`);
});

app.get('/iniciar',(req, res) => {
    iniciarCronometro();
    return res.send('Cronometro Iniciado!')
});

app.get('/pausar',(req, res) => {
   rodando = false;
   return res.send('Cronometro pausado!')
});

app.get('/continuar',(req, res) => {
    rodando = true;
   return res.send('Cronometro pausado!')
});

app.get('/zerar',(req, res) => {
    minutos = 0;
    segundos = 0;
    return res.send('Cronometro zerado!')
});

app.listen(8000)