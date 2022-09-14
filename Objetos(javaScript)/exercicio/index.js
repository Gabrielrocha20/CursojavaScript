let spaceship = {
    name: 'Não informado',
    type: 'Não informado',
    maxVelocity: 0,
    velocity: 0,
    speedUp: function(aceleration){
        if(aceleration <= this.maxVelocity) {
        this.velocity += aceleration
        }else {
            alert(`Sua nave nao consegue ultrapassar a velocidade maxima de ${this.maxVelocity}`)
            this.velocity = this.maxVelocity
            alert(`Sua nave esta com a velocidade maxima ${this.velocity} (km/s)`)
        }
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade maxima da nave (km/s)"))
}

function acelerate() {
    let aceleration = Number(prompt("Quanto você quer acelerar ?(km/s)"))
    spaceship.speedUp(aceleration)
    alert(`${spaceship.name} Esta se movendo a ${spaceship.velocity} (km/s)`)
}

function stop(){
    alert(`Nome: ${spaceship.name} \nTipo: ${spaceship.type} \nVelocidade da nave:  ${spaceship.velocity}`+
    `\nMaxima da Nave ${spaceship.maxVelocity}`)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
    
        switch(chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert('Opção inválida')
        }
    } while(chosenOption != "2")
}

registerSpaceship()
showMenu()