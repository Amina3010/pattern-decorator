interface IAchat {
    total(): number;
}

class Access implements IAchat{
    total(): number {
        return 1000;
    }
}

class AchatDeProduit implements IAchat{
    achatDecore: IAchat;
    constructor(_faireUnAchat: IAchat){
        this.achatDecore = _faireUnAchat
    }
    total(): number {
        return this.achatDecore.total()
    }
}

class AchatDeRobe extends AchatDeProduit{
    total(): number {
        return super.total() + 1500
    }
} 

class AchatDePantalon extends AchatDeProduit{
    total(): number {
        return super.total() + 2000
    }
}

class AchatDeChemise extends AchatDeProduit{
    total(): number {
        return super.total() + 3000
    }
}

const apayer = document.querySelector("#a_payer")! as HTMLHeadingElement;
const accessShop = document.querySelector("#access_shop")! as HTMLHeadingElement;

let access = new Access();

accessShop.innerText = "Access a la boutique";
apayer.innerText = access.total().toString();

const achatRobe = new AchatDeRobe(access)
const achatPantalon = new AchatDePantalon(access)
const achatChemise = new AchatDeChemise(access)


const clickRobe = document.querySelector("#click_robe")! as HTMLButtonElement
const clickPantalon = document.querySelector("#click_pantalon")! as HTMLButtonElement
const clickChemise = document.querySelector("#click_chemise")! as HTMLButtonElement


clickRobe.addEventListener('click', (event: Event) => {
    access = new AchatDeRobe(access)
    apayer.innerText = access.total().toString();
    accessShop.innerText="Montant Net a payer"

})
   


clickPantalon.addEventListener('click', (event: Event) => {
    access = new AchatDePantalon(access)
    apayer.innerText = access.total().toString();
    accessShop.innerText="Montant Net a payer"

    
})

clickChemise.addEventListener('click', (event: Event) => {
    access = new AchatDeChemise(access)
    apayer.innerText = access.total().toString();
    accessShop.innerText="Montant Net a payer"
   
})