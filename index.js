const randeDoma = ["Romantická přehrot večeře při svíčkách", 
                    "Uvařit ultimátní šmakec", 
                    "Netflix'n'Chill s popcornem, zmrzkou a tak.", 
                    "Nakreslit spolu něco podle tutoriálu", 
                    "Přehroceně se obléct a dělat power-couple fotky",
                    "Snídaně do postele", 
                    "Domácí welness - masky, masáže, relaxační hudba...", 
                    "Naplánování našho dalšího výletu", 
                    "Upéct dort/koláč", 
                    "Vyrobit domácí zmrzlinu", 
                    "Čas zkoušet nové xConfession kartičky", 
                    "Uvařit si čaj a hrát karty, jako dva trempíci", 
                    "Domácí horká čokoláada a film Čokoláda", 
                    "Picnic doma na podlaze",
                    "Upéct chleba",
                    "Udělat pizzu (hmmm s olivama)",
                    "Upéct foccaciu but make it art",
                    "Čajový dýchánek - jen my, několik čajů a sušenky (můžeme přizvat i nějaké plyšáky)",
                    "Hodina kaligrafie",
                    "Do konce dne se sřídáme v každém společném rozhodnutí",
                    "Vyrábění z korálků",
                    "Ušít si cool plátěnku!",
                    "Nalakovat si spolu nehty",
                    "Fastfood degustace a vyhlášení výtězů",
                    "Tráva a xConfession kartičky?",
                    "Pojďme se navzájem opečovat - umýt vlásky, udělat masáž a všechno, co mu na očích vidíš",
                    "Fondue",
                    "Souboj v počítačových hrách - každý vybírá dvě",
                    "Vytvořit společný bucket list",
                    "Vytvořit společný vision board",
                    "Domáci koktejlový večer!",
                    "Jóga, meditace, čaj a vonné tyčinky",
                    "Udělat DIY na něco, co nám doma chybí!",
                    "Vymasterovat dome jeden společenský tanec",
                    "Nákup a vaření úplně bez mluvení o tom co a jak budeme vařit",
                    "Vybrat 3 nové rostlinky a koupit je/dát klíčit/přesadit"


                ]
const randeVenku = ["Jít do kina",
                    "Procházka za zmrzlinou -v každém počasí!",
                    "Na sklenku vína jako třicátníci",
                    "Vyjížďka na kole, chvilku vedeš ty, chvilku já",
                    "Koupit spostu dobrot a vyrazit na picnic",
                    "Procházka do přírody",
                    "Pojďme krmit kachny, jako babi s dědou",
                    "Tour de sekáč",
                    "Do konce dne se sřídáme v každém společném rozhodnutí",
                    "Galerie/Muzeum",
                    "Jít si koupit donut",
                    "Procházka na kafe a dortík",
                    "Pouštění draků",
                    "Jít plavčit do bazénu",
                    "Jít se otužovat do moře",
                    "Procházka po pobřeží a sauna?",
                    "Výlet za hranolkama",
                    "Plavání a pizza",
                    "Jít si spolu zaběhat",
                    "'Say yes' day",
                    "Na výlet prvním vlakem co pojede",
                    "Fancy večeře ve fancy outfitech jako young billionairs",
                    "Vyrazit za nejhezčím výhledem na západ slunce",
                    "Vyrazit na koncert náhodné kapely, která dnes hraje",
                    "Bruslení - zimní i letní",
                    "Vybrat si navzájem outfity a vyrazit na aesthetic procházku do aesthetic kavárny",
                    "Vybrat jednu světovou kuchyni a vyzkoušet její nejlepší podnik ve městě",
                    "Badmintot/frisbee/volejbal... v parku",
                    "Vybrat nejhezčí společné fotky, zajít je vytisknout a založit je do alba, nebo pověsit na zeď",
                    "Jazz club",
                    "V každém baru jeden drink, pak zase dál",
                    "Kino",
                    "Divadlo",
                    "Vybrat 3 nové rostlinky a koupit je/dát klíčit/přesadit",
                    "Lezení",
                    

                ]


let randickoOutput= document.getElementById("randicko-output")

console.log(randeDoma.length)
console.log(randeVenku.length)

function randomRande(arr) {
    const randicko = arr[Math.floor(Math.random() * arr.length)]
    randickoOutput.textContent = randicko
}


const domaBtn = document.getElementById("doma-btn")
const venkuBtn = document.getElementById("venku-btn")


function callDoma(){
    randomRande(randeDoma)
}

function callVenku(){
    randomRande(randeVenku)
}

domaBtn.addEventListener("click", callDoma)

venkuBtn.addEventListener("click", callVenku)



