let turno_del_boot = false;

const secuencias = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];


function Player(p) {

    this.jugadas = {
        index: [],
        check: (bolean, n = 3) => {
            let misJugadas = this.jugadas.index;
            let considencias = 0;

            for (let i = 0; i < secuencias.length; i++) {
                const s = secuencias[i];

                for (let i = 0; i < misJugadas.length; i++) {

                    const z = misJugadas[i];
                    let test = s.indexOf(z) != -1;

                    if (test) ++considencias;
                    if (considencias == n) {

                        if (bolean) {

                            for (let i = 0; i < s.length; i++) {

                                let test2 = misJugadas.indexOf(s[i]) == -1;

                                if (test2) return s[i];
                            }
                        } else {
                            return true
                        }
                    }

                    if (i == misJugadas.length - 1 && considencias < n) {
                        considencias = 0;
                    }

                }
            }
            return (bolean)? -1 : false;
        },

        canbe: () => {

        }

    },

    this.select = (position) => {
        console.log("en la  pos:",position);
        const { espaciosLibres } = tablero;
        let f = espaciosLibres;
        // console.log("el",f);
        let i = f.indexOf(position);
        // console.log("el",i);
        // let test = i != -1;

        let test =  tablero.espaciosLibres.includes(position);
        console.log("puedo jugar?",test);
        // console.log("espacio libre click?",test);
        if (test) {
            this.jugadas.index.push(position)
            tablero.espaciosLibres.splice(i, 1);
        } else {
            console.log("este espacio ya fue ocupado");
            alert('this box '+position+' is slecected')
        }

    }

}


let tablero = {
    espaciosLibres: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

let player1 = new Player();
let player2 = new Player();
