export type Dish = {name:string;description:string;price:string;note?:string};
export type MenuCategory = {id:string;label:string;subtitle:string;items:Dish[]};
// Transcripción de una selección del menú oficial consultado el 27/09/2026.
// Los importes son referencias en euros, NO dólares. No se calcula una tasa BCV.
export const menu:MenuCategory[]=[
{id:"cafe",label:"Café y té",subtitle:"Para hacer una pausa.",items:[
{name:"Espresso, ristretto, americano o lungo",description:"Elige tu preparación de café.",price:"1,49 €",note:"Pequeño · Grande 1,99 €"},
{name:"Latte",description:"Café con leche.",price:"1,49 €",note:"Pequeño · Grande 1,99 €"},
{name:"Capucino",description:"Café marrón, como aparece en nuestra carta.",price:"1,49 €",note:"Pequeño · Grande 1,99 €"},
{name:"Café bombón",description:"Una de nuestras opciones de barismo.",price:"2,99 €"},
{name:"V60: gravedad",description:"Filtrado de textura limpia, con dulzura y acidez.",price:"3,99 €"},
{name:"Prensa francesa: inmersión",description:"Aromático, de cuerpo robusto y dulzor destacado.",price:"3,99 €"},
{name:"Matcha matsu caliente",description:"Té verde pulverizado de ceremonia japonesa.",price:"3,99 €",note:"Frío 4,99 €"},
{name:"Afogatto",description:"Una opción dulce de nuestra carta de barismo.",price:"7,99 €"}
]},
{id:"desayunos",label:"Desayunos",subtitle:"El día comienza en la mesa.",items:[
{name:"Desayuno Civeta",description:"Pollo ahumado o tocineta de res, huevos, jamón de pavo, queso Edam y dos arepas.",price:"9,99 €"},
{name:"Desayuno criollo",description:"Carne mechada, pisillo de pescado o pollo mechado, con caraotas, tajadas, queso blanco, huevos y dos arepas.",price:"7,99 €"},
{name:"Omelettes o tortillas",description:"Escoge cuatro ingredientes del menú. Con arepas o rebanadas de pan.",price:"8,99 €"},
{name:"Empanadas o arepas",description:"De maíz, plátano o yuca. Rellenos de carne, pollo, pescado o jamón y queso.",price:"2,99 €"},
{name:"Empanada o arepa de camarón",description:"Elige la masa de maíz, plátano o yuca.",price:"7,99 €"},
{name:"Empanada o arepa de pollo ahumado y queso amarillo",description:"Elige la masa de maíz, plátano o yuca.",price:"5,99 €"}
]},
{id:"hamburguesas",label:"Hamburguesas",subtitle:"Un antojo con nombre propio.",items:[
{name:"Welington",description:"200 g de carne con champiñones, crepe de espinaca, queso Edam, pan de hojaldre y salsa de queso.",price:"11,99 €"},
{name:"Civeta smash",description:"150 g de carne, queso Edam, lechuga, tomate, cebolla, pepinillos y salsa de la casa.",price:"7,99 €"},
{name:"Civeta Crispy",description:"200 g de pechuga crispy, queso Edam, lechuga, tomate, cebolla y salsa especial.",price:"7,99 €"}
]},
{id:"paninis",label:"Paninis y croissants",subtitle:"Para disfrutar a tu manera.",items:[
{name:"Panini de salmón ahumado",description:"Con queso crema, aguacate, tomates confitados, rúgula y alfalfa.",price:"14,99 €"},
{name:"Panini Philadelphia",description:"Res ahumada, cebolla cristalizada, pepinillos y queso.",price:"11,99 €"},
{name:"Panini de pollo grillado",description:"Con lechuga, tomate, cebolla, alfalfa, queso y salsa tártara.",price:"9,99 €"},
{name:"Croissant de salmón ahumado",description:"Alcaparra, queso crema, aguacate, cebolla morada y alfalfa.",price:"9,99 €"},
{name:"Croissant Civeta",description:"Jamón de pavo, queso amarillo, tomate, lechuga, cebolla, alfalfa y huevo.",price:"8,49 €"},
{name:"Croissant de jamón y queso",description:"Jamón de pavo y queso amarillo.",price:"6,49 €"}
]},
{id:"picoteo",label:"Picoteo y ensaladas",subtitle:"Al centro de la mesa.",items:[
{name:"Tapas Civeta",description:"Degustación de entradas.",price:"29,99 €"},
{name:"Carpaccio de lomito tradicional",description:"De nuestra selección de picoteo.",price:"10,99 €"},
{name:"Tequeños",description:"Una opción para compartir.",price:"6,99 €"},
{name:"Ceviche Civeta",description:"De nuestra selección de picoteo.",price:"11,99 €"},
{name:"Pulpo grillado",description:"De nuestra selección de picoteo.",price:"24,99 €"},
{name:"Ensalada César tradicional",description:"Con opción de añadir lomito, pollo o camarones por un costo adicional.",price:"7,99 €"}
]},
{id:"bebidas",label:"Bebidas",subtitle:"Frescura para acompañar.",items:[
{name:"Jugo de fresa",description:"Pídelo batido o frappé.",price:"3,99 €"},
{name:"Limonada",description:"Pídela batida o frappé.",price:"2,99 €"},
{name:"Súper vita C",description:"Naranja, limón y zanahoria.",price:"4,99 €"},
{name:"Tropical splash",description:"Fresa, piña y parchita.",price:"4,99 €"},
{name:"Green detox",description:"Manzana verde, piña, hierbabuena, espinaca, jengibre, limón y pepino.",price:"4,99 €"},
{name:"Malteada de Oreo",description:"De nuestra carta de bebidas.",price:"5,99 €"}
]}
];
// Añadir aquí únicamente campañas confirmadas con imagen, fecha y enlace reales.
export const campaigns:{title:string;description:string;image:string;url:string}[]=[];
