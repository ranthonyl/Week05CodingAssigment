//create beverage creator menu

//define parent class

//define class details



class Beer {
    constructor(style, vessel) {
        this.style = style;
        this.vessel = vessel;
    }
    
    describe() {
        return `I would like an ${this.style} , ${this.vessel} please.`;

    }

}

class Seltzer {
    constructor(brand, flavor) {
        this.brand = brand;
        this.flavor = flavor;
    }

    describe() {
        return `I would like an ${this.flavor} ${this.brand}.`;

    }
}

class Beverage {
    constructor(name) {
        this.name = name;
        this.beer = [];
        this.seltzer = [];
    }

    orderBeer(beer) {
        if (beer instanceof Beer) {
            this.beer.push(beer);
        } else {
            throw new Error(`You can only order beer. No Seltzers Allowed: ${beer}`);
        }
    }

    orderSeltzer(seltzer) {
        if (seltzer instanceof Seltzer) {
            this.seltzer.push(seltzer);
        } else {
            throw new Error(`You can only order seltzer. No Beers Allowed: ${seltzer}`);
        }
    }
    describe() {
        return `${this.name} has ${this.beer.length} or ${this.seltzer.length}`;

    }
}

class Menu {



    constructor() {
        this.beverage = [];
        this.beer = [];
        this.seltzer = [];
        this.selectedBeverage = null;
    }


    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case '1':
                this.orderBeverage();
                break;
                case '2':
                this.displayBeverages();
                break;
                case '3':
                this.deleteBeverage();
                break;
                case '4':
                this.orderBeerOrSeltzer();
                break;
                case '5':
                this.displayBeer();
                break;
                case '6':
                this.displaySeltzer();
                break;
            
                default:
                selection = 0;

            }

            selection = this.showMainMenuOptions();
        }

        alert('Cheers!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) order new beverage
            2) display beverages
            3) delete beverage
            4) order beer or seltzer
            5) display beer
            6) display seltzer
            `);
    }

    showBeerSeltzerOptions() {
        return prompt(`
            0) back
            1) order beer
            2) order setlzer
            ---------------------
           
            `);
    }

    displayBeverages() {
        let beverageString = '';
        for (let i = 0; i < this.beverage.length; i++) {
            beverageString += i + ') ' + this.beverage[i].name + '\n';
        }
        alert(beverageString);

    }

    orderBeverage() {
        let name = prompt('Enter name of drink you want to order:');
        this.beverage.push(new Beverage(name));
    }

    deleteBeverage() {
        let index = prompt('Enter the index of the drink you want to delete:');
            if (index > -1 && index < this.beverage.length) {
                this.beverage.splice(index, 1);
            }
    }


    orderBeerOrSeltzer() {
        
        let selection = this.showBeerSeltzerOptions();
            switch (selection) {
            case '1':
                this.orderBeer();
                break;
            case '2':
                this.orderSeltzer();
                break;

            default:
            selection = 0;
            }
            
        }

    orderBeer() {
        let style = prompt('Enter name of Beer you want to order:');
        let vessel = prompt('Draft or Bottle');
        this.beer.push(new Beer(style, vessel));
    }

    orderSeltzer() {
        let brand = prompt('What brand of seltzer do you want:');
        let flavor = prompt('What flavor seltzer:');
        this.seltzer.push(new Seltzer(brand, flavor));
    }

    displayBeer() {
        let beerString = '';
        for (let i = 0; i < this.beer.length; i++) {
            beerString += i + ') ' + this.beer[i].style + ' ' + this.beer[i].vessel + '\n';
        }
        alert(beerString);
    }

    displaySeltzer() {
        let seltzerString = '';
        for (let i = 0; i < this.seltzer.length; i++) {
            seltzerString += i + ') ' + this.seltzer[i].brand + ' ' + this.seltzer[i].flavor + '\n';
        }
        alert(seltzerString);
    }

 
    
}

let menu = new Menu();
menu.start();


