const invitados = ["Ailyn", "Berenice", "Carolina", "Cesar", "Dessire", "Gabriel", "Gaby", "Isaac", "Marcos", "Miguel", "Yakelin"]

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        if (arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]];
        }
        inicio++;
        siguiente++;
    }

     return null;
}