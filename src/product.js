import classic from './assets/Panini/classic.png';
import double from './assets/Panini/double.png';
import avocadoChicken from './assets/Panini/avocado-chicken.png';
import spicySriracha from './assets/Panini/spicy-sriracha.png';
import pulledPork from './assets/Panini/pulled-pork.png';
import mashroom from './assets/Panini/mashroom.png';
import vegan from './assets/Panini/vegan.png';
import fish from './assets/Panini/fish.png';
import lamb from './assets/Panini/lamb.png';
import buffaloChicken from './assets/Panini/buffalo-chicken.png';
import turkey from './assets/Panini/turkey.png';
import halloumi from './assets/Panini/halloumi.png';

//SUSHI
import nigiriSalmone from './assets/Sushi/nigiri-salmone.png';
import nigiriTonno from './assets/Sushi/nigiri-tonno.png';
import sashimi from './assets/Sushi/sashimi.png';
import temaki from './assets/Sushi/temaki.png';
import ebiNigiri from './assets/Sushi/ebi-nigiri.png';
import dragon from './assets/Sushi/dragon-roll.png';
import veggy from './assets/Sushi/veggy.png';
import philadelphia from './assets/Sushi/philadelphia.png';
import spicy from './assets/Sushi/spicy.png';
import mango from './assets/Sushi/mango.png';
import mojito from './assets/Sushi/mojito.png';
import newYork from './assets/Sushi/newYork.png';

//FRITTI
import patatine from './assets/Fritti/patatine.png';
import crocchette from './assets/Fritti/crocchette.png';
import cipolla from './assets/Fritti/cipolla.png';
import mozzarelline from './assets/Fritti/mozzarelline.png';
import arancino from './assets/Fritti/arancino.png';
import ascolane from './assets/Fritti/olive-ascolane.png';
import suppli from './assets/Fritti/suppli.png';
import calamari from './assets/Fritti/calamari.png';
import gamberi from './assets/Fritti/gamberi.png';
import verdura from './assets/Fritti/verdura.png';
import panelle from './assets/Fritti/panelle.png';
import churros from './assets/Fritti/churros.png';

//DOLCI
import tiramisu from './assets/Dolci/tiramisu.png';
import pannaCotta from './assets/Dolci/panna-cotta.png';
import cheesecake from './assets/Dolci/cheesecake.png';
import cannoli from './assets/Dolci/cannoli.png';
import torta from './assets/Dolci/torta.png';
import profiteroles from './assets/Dolci/profiteroles.png';
import sfogliatella from './assets/Dolci/sfogliatella.png';
import gelato from './assets/Dolci/gelato.png';
import mousse from './assets/Dolci/mousse.png';
import crostata from './assets/Dolci/crostata.png';
import zeppola from './assets/Dolci/zeppola.png';
import cremaCatalana from './assets/Dolci/crema-catalana.png';

//INSALATE
import insalataGreca from './assets/Insalate/insalata-greca.png';
import caeserSalad from './assets/Insalate/caeserSalad.png';
import caprese from './assets/Insalate/caprese.png';
import insalataTonno from './assets/Insalate/insalataTonno.png';
import quinoa from './assets/Insalate/quinoa.png';
import mista from './assets/Insalate/mista.png';
import riso from './assets/Insalate/riso.png';
import pollo from './assets/Insalate/pollo.png';
import waldorf from './assets/Insalate/waldorf.png';
import couscous from './assets/Insalate/couscous.png';
import mare from './assets/Insalate/mare.png';
import ceci from './assets/Insalate/ceci.png';

//BEVANDE
import cocaCola from './assets/Bevande/cocacola.png';
import naturale from './assets/Bevande/naturale.png';
import frizzante from './assets/Bevande/frizzante.png';
import fanta from './assets/Bevande/fanta.png';
import sprite from './assets/Bevande/sprite.png';
import birra from './assets/Bevande/birra.png';
import rosso from './assets/Bevande/rosso.png';
import bianco from './assets/Bevande/bianco.png';
import succo from './assets/Bevande/succo.png';
import limonata from './assets/Bevande/limonata.png';
import limone from './assets/Bevande/limone.png';
import pesca from './assets/Bevande/pesca.png';

//PIZZE
import margherita from './assets/Pizze/margherita.png';
import diavola from './assets/Pizze/diavola.png';
import formaggi from './assets/Pizze/formaggi.png';
import capricciosa from './assets/Pizze/capricciosa.png';
import contadina from './assets/Pizze/contadina.png';
import crudaiola from './assets/Pizze/crudaiola.png';
import rossa from './assets/Pizze/rossa.png';
import salsiccia from './assets/Pizze/salsiccia.png';
import pesto from './assets/Pizze/pesto.png';
import funghi from './assets/Pizze/funghi.png';
import tonnoCipolla from './assets/Pizze/tonnoCipolla.png';
import pistacchiosa from './assets/Pizze/pistacchiosa.png';


export const products = {
    // Pizze
    pizze: [
    {   id: 1, 
        name: "Margherita", 
        description: "Pizza classica con pomodoro e mozzarella", 
        ingredients: ["Pomodoro,", " Mozzarella,", " Basilico"], 
        image: margherita, 
        category: "Pizze", 
        price: 5.00 
    },
    {   id: 2, 
        name: "Diavola", 
        description: "Pizza con salame piccante", 
        ingredients: ["Pomodoro,", " Mozzarella,", " Salame piccante"], 
        image: diavola, 
        category: "Pizze", 
        price: 6.50 
    },
    {   id: 3, 
        name: "Quattro Formaggi", 
        description: "Pizza con quattro formaggi diversi", 
        ingredients: ["Mozzarella,", " Gorgonzola,", " Parmigiano,", " Fontina"], 
        image: formaggi, 
        category: "Pizze", 
        price: 7.00 
    },
    {   id: 4, 
        name: "Capricciosa", 
        description: "Pizza con prosciutto, funghi e carciofi", 
        ingredients: ["Pomodoro,", " Mozzarella,", " Prosciutto,", " Funghi,", " Carciofi"], 
        image: capricciosa, 
        category: "Pizze", 
        price: 7.50 
    },
    {   id: 5, 
        name: "Contadina", 
        description: "Pizza con pomodoro, fiordilatte, prosciutto cotto, funghi, uova e salame", 
        ingredients: ["Pomodoro,", " Fiordilatte,", " Prosciutto cotto,", " Funghi,", " Uova,", " Salame"], 
        image: contadina, 
        category: "Pizze", 
        price: 6.50 
    },
    {   id: 6, 
        name: "Crudaiola", 
        description: "Pizza con bresaola, grana e rucola", 
        ingredients: ["Pomodoro,", " Mozzarella,", " Bresaola,", " Grana,", " Rucola"], 
        image: crudaiola, 
        category: "Pizze", 
        price: 7.00 
    },
    {   id: 7, 
        name: "Tonno e Cipolle", 
        description: "Pizza con tonno e cipolle", 
        ingredients: ["Pomodoro,", " Mozzarella,", " Tonno,", " Cipolle"], 
        image: tonnoCipolla, 
        category: "Pizze", 
        price: 7.50 
    },
    {   id: 8, 
        name: "Rossa", 
        description: "Pizza con pomodoro", 
        ingredients: [" Pomodoro,", " Aglio,", " Origano"], 
        image: rossa, 
        category: "Pizze", 
        price: 8.00 
    },
    {   id: 9, 
        name: "Salsiccia e Friarielli", 
        description: "Pizza con salsiccia e friarielli", 
        ingredients: ["Mozzarella,", " Salsiccia,", " Friarielli"], 
        image: salsiccia, 
        category: "Pizze", 
        price: 7.50 
    },
    {   id: 10, 
        name: "Pistacchiosa", 
        description: "Pizza con motadella, burratina e granelli di pistacchioi", 
        ingredients: ["Mortadella,", " Burratina,", " Pistacchio"], 
        image: pistacchiosa, 
        category: "Pizze", 
        price: 9.00 
    },
    {   id: 11, 
        name: "Pizza al Pesto", 
        description: "Pizza con pesto di basilico", 
        ingredients: ["Pesto,", " Mozzarella,", " Pomodorini"], 
        image: pesto, 
        category: "Pizze", 
        price: 7.00 
    },
    {   id: 12, 
        name: "Pizza Salsiccia e Funghi", 
        description: "Pizza con salsiccia e funghi", 
        ingredients: ["Pomodoro,", " Mozzarella,", " Salsiccia,", " Funghi"], 
        image: funghi, 
        category: "Pizze", 
        price: 9.50 
    },
],  
    // Panini
    panini: [
    {
        id: 13,
        name: "Burger Classico di Manzo",
        description: "Un burger tradizionale di manzo con ingredienti freschi e un sapore saporito.",
        ingredients: ["Hamburger di Manzo,", " Lattuga,", " Pomodoro,", " Cheddar,", " Cetriolini,", " Ketchup,", " Panino al Sesamo"],
        image: classic,
        category: "Manzo",
        price: 9.00
        },
        {
        id: 14,
        name: "Double Bacon Cheeseburger",
        description: "Un burger abbondante con due hamburger di manzo, bacon e cheddar fuso.",
        ingredients: ["Doppio Hamburger di Manzo,", " Bacon,", " Cheddar,", " Maionese,", " Salsa BBQ,", " Cetroli,", " Cipolla"],
        image: double,
        category: "Manzo",
        price: 12.50
        },
        {
        id: 15,
        name: "Burger di Pollo e Avocado",
        description: "Un burger di pollo alla griglia sano e delizioso con cremoso avocado.",
        ingredients: ["Pollo fritto,", " Avocado,", " Cavolo rosso,", " Pomodoro,", " Cheddar"],
        image: avocadoChicken,
        category: "Chicken",
        price: 9.50
        },
        {
        id: 16,
        name:  "Burger Piccante al Sriracha",
        description: "Un burger di manzo audace e piccante con jalapeños e salsa sriracha per un gusto deciso.",
        ingredients: ["Hamburger di Manzo, ", "Bacon, ", "Jalapeños, ", "Lattuga, ", "Salsa Sriracha, ", "Cipolla, ", "Formaggio svizzero, ", "Pomodoro"],
        image: spicySriracha,
        category: "Manzo",
        price: 10.50
        },
        {
        id: 17,
        name: "Burger BBQ Pulled Pork",
        description: "Un gustoso burger di maiale sfilacciato al BBQ con coleslaw agrodolce.",
        ingredients: ["Maiale Sfilacciato, ", "Cipolla, ", "Salsa BBQ, ", "Cavolo rosso, ", "Lattuga"],
        image: pulledPork,
        category: "Maiale",
        price: 11.00
        },
        {
        id: 18,
        name: "Burger ai Funghi e Svizzero",
        description: "Un succulento burger di manzo con funghi saltati e formaggio svizzero fuso.",
        ingredients: ["Hamburger di Manzo, ", "Formaggio svizzero, ", "Funghi Saltati, ", "Lattuga, ", "Maionese all'Aglio"],
        image: mashroom,
        category: "Manzo",
        price: 10.00
        },
        {
        id: 19,
        name: "Burger Vegano ai Fagioli Neri",
        description: "Un delizioso e nutriente burger ai fagioli neri servito con avocado fresco e maionese vegana.",
        ingredients: ["Hamburger di Fagioli Neri, ", "Avocado, ", "Lattuga, ", "Pomodoro, ", "Cipolla Rossa, ", "Maionese Vegana"],
        image: vegan,
        category: "Vegano",
        price: 8.50
        },
        {
        id: 20,
        name: "Burger con Filetto di Pesce",
        description: "Un burger di filetto di pesce impanato servito con lattuga e salsa tartara",
        ingredients: ["Filetto di Pesce Impanato, ", "Lattuga, ", "Salsa Tartara"],
        image: fish,
        category: "Pesce",
        price: 9.00
        },
        {
        id: 21,
        name: "Burger di Agnello",
        description: "Un burger di agnello con feta, lattuga, pomodoro, cetriolo e salsa tzatziki.",
        ingredients: ["Hamburger di Agnello, ", "Rucola",
        "Cipolla rossa", "Salsa Tzatziki"],
        image: lamb,
        category: "Agnello",
        price: 12.00
        },
        {
        id: 22,
        name: "Burger di Pollo Buffalo",
        description: "Un croccante burger di pollo fritto con salsa Buffalo, lattuga e formaggio blue.",
        ingredients: ["Pollo Fritto, ", "Salsa Buffalo, ", "Lattuga, ", "Cetriolini",],
        image: buffaloChicken,
        category: "Pollo",
        price: 10.00
        },
        {
        id: 23,
        name: "Burger di Tacchino e Mirtilli",
        description: "Un burger di tacchino servito con salsa di mirtilli rossi e brie, per un tocco autunnale.",
        ingredients: ["Hamburger di Tacchino, ", "Rucola, ", "Formaggio fuso, ", "Salsa di Mirtilli Rossi",],
        image: turkey,
        category: "Tacchino",
        price: 9.50
        },
        {
        id: 24,
        name: "Burger Veggie con Halloumi",
        description: "Un burger vegetariano con halloumi grigliato, zucchine e peperoni rossi, accompagnato da pesto.",
        ingredients: ["Halloumi Grigliato, ", "Zucchine, ", "Cetrioli, ", "Rucola"],
        image: halloumi,
        category: "Vegetariano",
        price: 9.50
        }
],
    // Sushi
    sushi: [
    {   id: 25,
        name: "Sashimi Misto", 
        description: "Sashimi di tonno, salmone e branzino || 9pz", 
        ingredients: ["Tonno, ", "Salmone, ", "Branzino"], 
        image: sashimi, 
        category: "Sushi", 
        price: 12.00 
        
    },
    {   id: 26, 
        name: "Nigiri Salmone", 
        description: "Nigiri con salmone || 2pz", 
        ingredients: ["Riso, ", "Salmone"], 
        image: nigiriSalmone, 
        category: "Sushi", 
        price: 4.00 
    },
    {   id: 27, 
        name: "Nigiri Tonno", 
        description: "Nigiri con tonno || 2pz", 
        ingredients: ["Riso, ", "Tonno"], 
        image: nigiriTonno, 
        category: "Sushi", 
        price: 4.00 
    },
    {   id: 28, 
        name: "Ebi Nigiri", 
        description: "Nigiri con gamberi || 2pz", 
        ingredients: ["Riso, ", "Gamberi"], 
        image: ebiNigiri, 
        category: "Sushi", 
        price: 5.00 
    },
    {   id: 29, 
        name: "Temaki", 
        description: "Cono di sushi con salmone", 
        ingredients: ["Alga, ", "Riso, ", "Salmone, ", "Avocado"], 
        image: temaki, 
        category: "Sushi", 
        price: 5.50 
    },
    {   id: 30, 
        name: "Philadelphia Special", 
        description: "Roll con Salmone Crudo, avocado e Philadelphia || 8pz", 
        ingredients: ["Riso, ", "Salmone, ", "Avocado, ", "Philadelphia"], 
        image: philadelphia, 
        category: "Sushi", 
        price: 12.50 
    },
    {   id: 31, 
        name: "Spicy Salmon", 
        description: "Roll con Tartare di salmone crudo leggermente piccante || 4pz", 
        ingredients: ["Riso, ", "Tartare di salmone, ", "Paprika"], 
        image: spicy, 
        category: "Sushi", 
        price: 4.00 
    },
    {   id: 32, 
        name: "Veggy Roll", 
        description: "Roll Vegetariano con Carote e Zucchina fritta in Tempura, avvolto con Avocado || 4pz", 
        ingredients: ["Riso, ", "Carote, ", "Zucchine, ", "Avocado"], 
        image: veggy, 
        category: "Sushi", 
        price: 6.50 
    },
    {   id: 33, 
        name: "Dragon Roll", 
        description: "Roll con Salmone Fritto, cetriolo avvolto con Avocado || 8pz", 
        ingredients: ["Riso, ", "Salmone fritto, ", "Avocado, ", "Cetriolo"], 
        image: dragon, 
        category: "Sushi", 
        price: 7.50 
    },
    {   id: 34, 
        name: "Mango Style", 
        description: "All’interno Spigola croccante in Tempura, salsa yuzu e all’esterno Mango e Peperoncino fresco || 8pz", 
        ingredients: ["Riso, ", "Spigola, ", "Salsa yuzu, ", "Mango, ", "Peperoncino"], 
        image: mango, 
        category: "Sushi", 
        price: 12.50 
    },
    {   id: 35, 
        name: "Mojito Roll", 
        description: "All’interno spigola cruda marinata con Rum, Menta e scorza di Lime e ananas.All’esterno tartare di Ananas e Maionese di riso || 8pz", 
        ingredients: ["Riso, ", "Spigola, ", "Rum, ", "Menta, ", "Lime, ", "Ananas, ", "Maionese di riso"], 
        image: mojito, 
        category: "Sushi", 
        price: 13.50 
    },
    {   id: 36, 
        name: "New York Integrale Roll", 
        description: "Roll con Riso Integrale, all’interno Salmone e Avocado || 4pz", 
        ingredients: ["Riso integrale, ", "Salmone, ", "Avocado"], 
        image: newYork, 
        category: "Sushi", 
        price: 5.50 
    },
],
    // Frittura
    fritti: [
    {   id: 37, 
        name: "Patatine Fritte", 
        description: "Classiche patatine fritte croccanti", 
        ingredients: ["Patate, ", "Olio"], 
        image: patatine, 
        category: "Frittura", 
        price: 3.00 
    },
    {   id: 38, 
        name: "Crocchette di Patate", 
        description: "Crocchette fritte di patate", 
        ingredients: ["Patate, ", "Pangrattato, ", "Formaggio"], 
        image: crocchette, 
        category: "Frittura", 
        price: 4.00 
    },
    {   id: 39, 
        name: "Anelli di Cipolla", 
        description: "Anelli di cipolla fritti e croccanti", 
        ingredients: ["Cipolla, ", "Farina, ", "Olio"], 
        image: cipolla, 
        category: "Frittura", 
        price: 4.50 
    },
    {   id: 40, 
        name: "Mozzarelline Fritte", 
        description: "Bocconcini di mozzarella fritti", 
        ingredients: ["Mozzarella, ", "Pangrattato, ", "Olio"], 
        image: mozzarelline, 
        category: "Frittura", 
        price: 4.50 
    },
    {   id: 41, 
        name: "Arancini", 
        description: "Triangoli di riso fritte ripiene", 
        ingredients: ["Riso, ", "Ragù, ", "Mozzarella"], 
        image: arancino, 
        category: "Frittura", 
        price: 5.00 
    },
    {   id: 42, 
        name: "Olive Ascolane", 
        description: "Olive ripiene di carne e fritte", 
        ingredients: ["Olive, ", "Carne, ", "Pangrattato"], 
        image: ascolane, 
        category: "Frittura", 
        price: 4.50 
    },
    {   id: 43, 
        name: "Supplì", 
        description: "Crocchetta di riso con mozzarella", 
        ingredients: ["Riso, ", "Mozzarella, ", "Pomodoro"], 
        image: suppli, 
        category: "Frittura", 
        price: 4.00 
    },
    {   id: 44, 
        name: "Calamari Fritti", 
        description: "Anelli di calamari fritti", 
        ingredients: ["Calamari, ", "Farina, ", "Olio"], 
        image: calamari, 
        category: "Frittura", 
        price: 7.00 
    },
    {   id: 45, 
        name: "Gamberi in Tempura", 
        description: "Gamberi in tempura", 
        ingredients: ["Gamberi, ", "Farina, ", "Olio"], 
        image: gamberi, 
        category: "Frittura", 
        price: 7.50 
    },
    {   id: 46, 
        name: "Frittelle di Verdure", 
        description: "Frittelle croccanti di verdure miste", 
        ingredients: ["Zucchine, ", "Carote, ", "Farina"], 
        image: verdura, 
        category: "Frittura", 
        price: 4.00 
    },
    {   id: 47, 
        name: "Panelle", 
        description: "Frittelle di farina di ceci", 
        ingredients: ["Farina di ceci, ", "Acqua, ", "Sale"], 
        image: panelle, 
        category: "Frittura", 
        price: 3.50 
    },
    {   id: 48, 
        name: "Churros Salati", 
        description: "Churros fritti salati", 
        ingredients: ["Farina, ", "Olio, ", "Sale"], 
        image: churros, 
        category: "Frittura", 
        price: 5.00 
    },
],
    // Dolci
    dolci: [
    {   id: 49, 
        name: "Tiramisù", 
        description: "Dolce con mascarpone e caffè", 
        ingredients: ["Mascarpone, ", "Caffè, ", "Savoiardi"], 
        image: tiramisu, 
        category: "Dolci", 
        price: 4.50 
    },
    {   id: 50, 
        name: "Panna Cotta", 
        description: "Dolce al cucchiaio con panna, fragole e mirtilli", 
        ingredients: ["Panna, ", "Zucchero, ", "Vaniglia, ", "Fragola, ", "Mirtilli"], 
        image: pannaCotta, 
        category: "Dolci", 
        price: 4.00 
    },
    {   id: 51, 
        name: "Cheesecake", 
        description: "Torta al formaggio con base croccante", 
        ingredients: ["Formaggio fresco, ", "Biscotti, ", "Zucchero"], 
        image: cheesecake, 
        category: "Dolci", 
        price: 5.00 
    },
    {   id: 52, 
        name: "Cannoli Siciliani", 
        description: "Dolci ripieni di ricotta", 
        ingredients: ["Ricotta, ", "Cannolo, ", "Zucchero"], 
        image: cannoli, 
        category: "Dolci", 
        price: 5.50 
    },
    {   id: 53, 
        name: "Torta al Cioccolato", 
        description: "Torta soffice al cioccolato", 
        ingredients: ["Cioccolato, ", "Farina, ", "Uova"], 
        image: torta, 
        category: "Dolci", 
        price: 4.50 
    },
    {   id: 54, 
        name: "Profiteroles", 
        description: "Bignè ripieni di crema e ricoperti di cioccolato", 
        ingredients: ["Bignè, ", "Crema, ", "Cioccolato"], 
        image: profiteroles, 
        category: "Dolci", 
        price: 6.00 
    },
    {   id: 55, 
        name: "Sfogliatella", 
        description: "Dolce napoletano ripieno di ricotta", 
        ingredients: ["Pasta sfoglia, ", "Ricotta, ", "Zucchero"], 
        image: sfogliatella, 
        category: "Dolci", 
        price: 3.50 
    },
    {   id: 56, 
        name: "Gelato Artigianale", 
        description: "Gelato artigianale ai gusti vari", 
        ingredients: ["Latte, ", "Zucchero, ", "Gusti vari"], 
        image: gelato, 
        category: "Dolci", 
        price: 4.00 
    },
    {   id: 57, 
        name: "Mousse al Cioccolato", 
        description: "Mousse soffice al cioccolato fondente", 
        ingredients: ["Cioccolato, ", "Panna, ", "Zucchero"], 
        image: mousse, 
        category: "Dolci", 
        price: 5.00 
    },
    {   id: 58, 
        name: "Crostata di Frutta", 
        description: "Crostata con crema pasticcera e frutta fresca", 
        ingredients: ["Pasta frolla, ", "Crema pasticcera, ", "Frutta fresca"], 
        image: crostata, 
        category: "Dolci", 
        price: 4.50 
    },
    {   id: 59, 
        name: "Zeppola", 
        description: "Dolce fritte ripieno di crema con mirtillo sopra", 
        ingredients: ["Farina, ", "Crema, ", "Mirtillo"], 
        image: zeppola, 
        category: "Dolci", 
        price: 3.00 
    },
    {   id: 60, 
        name: "Crema Catalana", 
        description: "Dolce al cucchiaio con crosta di zucchero caramellato", 
        ingredients: ["Latte, ", "Zucchero, ", "Uova"], 
        image: cremaCatalana, 
        category: "Dolci", 
        price: 5.00 
    },
],
    // Insalate
    insalate: [
    {   id: 61, 
        name: "Insalata Greca", 
        description: "Insalata con feta, pomodori e olive", 
        ingredients: ["Feta, ", "Pomodori, ", "Olive, ", "Cetrioli, ", "Insalata"], 
        image: insalataGreca, 
        category: "Insalate", 
        price: 6.50 
    },
    {   id: 62, 
        name: "Caesar Salad", 
        description: "Insalata con pollo grigliato e crostini", 
        ingredients: ["Insalata, ", "Pollo grigliato, ", "Parmigiano, ", "Crostini"], 
        image: caeserSalad, 
        category: "Insalate", 
        price: 7.00 
    },
    {   id: 63, 
        name: "Insalata Caprese", 
        description: "Insalata con mozzarella di bufala e pomodori", 
        ingredients: ["Mozzarella di bufala, ", "Pomodori, ", "Basilico"], 
        image: caprese, 
        category: "Insalate", 
        price: 5.50 
    },
    {   id: 64, 
        name: "Insalata di Tonno", 
        description: "Insalata con tonno, uova, olive e mais", 
        ingredients: ["Insalata, ", "Tonno, ", "Uova, ", "Olive, ", "Mais"], 
        image: insalataTonno, 
        category: "Insalate", 
        price: 6.50 
    },
    {   id: 65, 
        name: "Insalata di Quinoa", 
        description: "Insalata con quinoa e verdure fresche", 
        ingredients: ["Quinoa, ", "Ravanello, ", "Pomodori, ", "Avocado, ", "Zucchina"], 
        image: quinoa, 
        category: "Insalate", 
        price: 7.50 
    },
    {   id: 66, 
        name: "Insalata Mista", 
        description: "Insalata con verdure miste di stagione", 
        ingredients: ["Insalata, ", "Pomodori, ", "Olive, ", "Feta, ", "Peperoni, ", "Ravanello"], 
        image: mista, 
        category: "Insalate", 
        price: 5.00 
    },
    {   id: 67, 
        name: "Insalata di Riso", 
        description: "Insalata di riso con pomodori e tonno", 
        ingredients: ["Riso, ", "Tonno, ", "Pomodori, ", "Olive"], 
        image: riso, 
        category: "Insalate", 
        price: 6.00 
    },
    {   id: 68, 
        name: "Insalata di Pollo", 
        description: "Insalata di pollo con sedano, pomodori secchi e gorgonzola", 
        ingredients: ["Insalata, ", "Pollo, ", "Sedano, ", "Pomodori secchi, ", "Gorgonzola"], 
        image: pollo, 
        category: "Insalate", 
        price: 6.50 
    },
    {   id: 69, 
        name: "Insalata Waldorf", 
        description: "Insalata con mele, noci, sedano e uva", 
        ingredients: ["Mele, ", "Noci, ", "Sedano, ", "Uva, ", "Insalata"], 
        image: waldorf, 
        category: "Insalate", 
        price: 7.50 
    },
    {   id: 70, 
        name: "Insalata di Couscous", 
        description: "Insalata di couscous con pomodori, peperoni, melanzane e zucchine", 
        ingredients: ["Couscous, ", "Peperoni, ", "Pomodori, ", "Melanzane, ", "Zucchine"], 
        image: couscous, 
        category: "Insalate", 
        price: 7.00 
    },
    {   id: 71, 
        name: "Insalata di Mare", 
        description: "Insalata con frutti di mare freschi", 
        ingredients: ["Calamari, ", "Gamberi, ", "Polpo, ", "Cozze, ", "Prezzemolo"], 
        image: mare, 
        category: "Insalate", 
        price: 9.50 
    },
    {   id: 72, 
        name: "Insalata di Ceci", 
        description: "Insalata con ceci, pomodori, feta e frutta secca", 
        ingredients: ["Ceci, ", "Pomodori, ", "Feta, ", "Frutta secca"], 
        image: ceci, 
        category: "Insalate", 
        price: 6.00 
    },
],
    // Bevande
    bevande: [
    {   id: 73, 
        name: "Coca Cola", 
        description: "Bevanda gassata classica", 
        // ingredients: ["Acqua", "Zucchero", "An  idr   ide carbonica"], 
        image: cocaCola, 
        category: "Bevande", 
        price: 2.50 
    },
    {   id: 74, 
        name: "Acqua Naturale", 
        description: "Acqua minerale naturale", 
        // ingredients: ["Acqua"], 
        image: naturale, 
        category: "Bevande", 
        price: 1.50 
    },
    {   id: 75, 
        name: "Acqua Frizzante", 
        description: "Acqua minerale frizzante", 
        // ingredients: ["Acqua", "An  idr   ide carbonica"], 
        image: frizzante, 
        category: "Bevande", 
        price: 1.50 
    },
    {   id: 76, 
        name: "Fanta", 
        description: "Bevanda gassata all'arancia", 
        // ingredients: ["Acqua", "Zucchero", "Succo d'arancia"], 
        image: fanta, 
        category: "Bevande", 
        price: 2.50 
    },
    {   id: 77, 
        name: "Sprite", 
        description: "Bevanda gassata al limone e lime", 
        // ingredients: ["Acqua", "Zucchero", "An  idr   ide carbonica", "Limone"], 
        image: sprite, 
        category: "Bevande", 
        price: 2.50 
    },
    {   id: 78, 
        name: "Birra Moretti", 
        description: "Birra", 
        // ingredients: ["Acqua", "Malto d'orzo", "Luppolo"], 
        image: birra, 
        category: "Bevande", 
        price: 4.00 
    },
    {   id: 79, 
        name: "Vino Rosso", 
        description: "Vino rosso di Montalcino", 
        // ingredients: ["Uva", "Alcol"], 
        image: rosso, 
        category: "Bevande", 
        price: 5.00 
    },
    {   id: 80, 
        name: "Vino Bianco", 
        description: "Vino bianco Ninì", 
        // ingredients: ["Uva", "Alcol"], 
        image: bianco, 
        category: "Bevande", 
        price: 5.00 
    },
    {   id: 81, 
        name: "Succo di Frutta", 
        description: "Succo di frutta al gusto ace", 
        // ingredients: ["Pesca", "Acqua", "Zucchero"], 
        image: succo, 
        category: "Bevande", 
        price: 2.00 
    },
    {   id: 82, 
        name: "Limonata Schweppes", 
        description: "Bevanda fresca al limone", 
        // ingredients: ["Acqua", "Zucchero", "Limone"], 
        image: limonata, 
        category: "Bevande", 
        price: 2.50 
    },
    {   id: 83, 
        name: "Thè al limone", 
        description: "Bevanda al limone", 
        // ingredients: ["Acqua", "Zucchero", "Tè"], 
        image: limone, 
        category: "Bevande", 
        price: 2.50 
    },
    {   id: 84, 
        name: "Thè alla pesca",
        description: "thè alla pesca", 
        //  ingredients: ["Acqua", "Zucchero", "Tè"], 
        image: pesca, 
        category: "Bevande", 
        price: 2.50 
    },
],
};
  