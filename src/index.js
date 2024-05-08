const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do Herói: ", function (heroName) {
    rl.question("Digite a quantidade de XP do Herói: ", function (xpHero) {
        xpHero = parseInt(xpHero);

        let nivelHero;
        if (xpHero <= 1000) {
            nivelHero = "Ferro";
        } else if (xpHero >= 1001 && xpHero <= 2000) {
            nivelHero = "Bronze";
        } else if (xpHero >= 2001 && xpHero <= 5000) {
            nivelHero = "Prata";
        } else if (xpHero >= 5001 && xpHero <= 7000) {
            nivelHero = "Ouro";
        } else if (xpHero >= 7001 && xpHero <= 8000) {
            nivelHero = "Platina";
        } else if (xpHero >= 8001 && xpHero <= 9000) {
            nivelHero = "Ascendente";
        } else if (xpHero >= 9001 && xpHero <= 10000) {
            nivelHero = "Imortal";
        } else {
            nivelHero = "Radiante";
        }

        console.log(`O Herói de nome ${heroName} está no nível de ${nivelHero}`);

        rl.close();
    });
});
