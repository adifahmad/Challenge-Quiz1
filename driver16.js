class Tyre {
    constructor(brand, size) {
        this.b = brand
        this.s = size
    }
}

class Car extends Tyre {
    constructor(brand, size, varian, serial, seat, door, year, warranty) {
        super(brand, size)
        this.v = varian
        this.sr = serial
        this.st = seat
        this.d = door
        this.y = year
        this.w = warranty
    }

    static randomSerial() {
        let kamus = "abcdefghijklmnopqrstuvwxyz0123456789"
        let random = ""
        let char = ""
        let Mathrandom = ""
        for (let i = 0; i < 36; i++) {
            random = Math.floor(Math.random() * kamus.length)
            char = kamus[random];
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                random = i;
                char = '-'
            }
            Mathrandom += char;
        }
        return Mathrandom
    }
}


class Agya extends Car { }

class Rush extends Car { }

class CarFactory {
    constructor() {
        this.car = []
    }

    produce(year) {
            for (let i = 0; i < Math.floor(Math.random()*9); i++) {
                let mobil1 = new Agya("Dunlop", 15, "Agya", Car.randomSerial(), 5, 5, year, 3);
                this.car.push(mobil1)
            }
            for (let i = 0; i < Math.floor(Math.random()*9); i++) {
                let mobil2 = new Rush("Bridgeston", 17, "Rush", Car.randomSerial(), 5, 5, year, 1);
                this.car.push(mobil2)
            }
        }

    result() {
        for (let i = 0; i < this.car.length; i++) {
            console.log(`
no. ${i + 1}
Tyre : ${this.car[i].b} ${this.car[i].s} inch
Varian : ${this.car[i].v}
sn : ${this.car[i].sr}
door : ${this.car[i].d}
seat : ${this.car[i].st} seater
year : ${this.car[i].y}
warranty : ${this.car[i].w}
            `)
        }

    }

    guaranteeSimulation(simulationYear) {
        console.log(`hasil simulasi garansi semua mobil pada tahun ${simulationYear}`)
        for (let i = 0; i < this.car.length; i++) {
            let totalGaransi = simulationYear - this.car[i].y;
            if (totalGaransi >= this.car[i].w) {
                console.log(`
no. ${i + 1}
Tyre : ${this.car[i].b} ${this.car[i].s} inch
Varian : ${this.car[i].v}
sn : ${this.car[i].sr}
door : ${this.car[i].d}
seat : ${this.car[i].st} seater
year : ${this.car[i].y}
warranty : ${this.car[i].w}
status on ${simulationYear} this guarantee is expired
            `)
            } else if (totalGaransi < this.car[i].w) {
                console.log(`
no. ${i + 1}
Tyre : ${this.car[i].b} ${this.car[i].s} inch
Varian : ${this.car[i].v}
sn : ${this.car[i].sr}
door : ${this.car[i].d}
seat : ${this.car[i].st} seater
year : ${this.car[i].y}
warranty : ${this.car[i].w}
status on ${simulationYear} this guarantee is active
            `)
            }
        }
    }
}


const toyota = new CarFactory()
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2025)


