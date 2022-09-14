let spacestation = []

class SpaceStation {
    constructor (name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.porta = false
        this.engatada = false
    }

    engatar () {
        this.engatada = true
        this.port = true
        return
    }

}

function showMenu (){
    let escolha = prompt('Você deseja:\n1- Engatar nave \n2- Imprimir naves\n3- Parar')
    return escolha
}

function createSpaceship() {
    let name = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")
    let spaceship = new SpaceStation(name, crewQuantity)
    spacestation.push({"name": name, "crewQuantity": crewQuantity})
    return spaceship
}

function listNaves (spaceships) {
    let spaceList = ''
    spaceships.forEach((spaceship, index) => {
        spaceList += ` ${(index + 1)} - ${spaceship.name} ( ${spaceship.crewQuantity} tripulantes)`
    })
    alert(spaceList)
}

let chosenOption
while (chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.engatar
            break
        case "2":
            listNaves(spacestation)
            break
    }
}