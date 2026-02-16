const productos = [
    {
        id:'1',
        name:'Babolat Air Viper',
        description: 'La Babolat Air Viper 2.5 2025 es una pala de pádel diseñada para jugadores agresivos que buscan máxima potencia y velocidad en cada golpe.',
        stock: 10,
        price: 500000,
        category: 'Paddles',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_691627-MLA99988615197_112025-F.webp'
    },
    {
        id:'2',
        name:'Babolat Technical Viper',
        description: 'Esta pala, resultado de una colaboración con Juan Lebrón, combina potencia extrema, efectos máximos y diseño exclusivo. Juega con los colores del mejor jugador del mundo con la Technical Viper Juan Lebrón.',
        stock: 10,
        price: 395000,
        category: 'Paddles',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_925913-MLA84537731706_052025-F.webp'
    },
    {
        id:'3',
        name:'Babolat Counter Vertuo',
        description: 'La Counter Vertuo de Babolat está pensada para jugadores que valoran la precisión y el confort sin sacrificar el rendimiento. Con su composición en fibra de vidrio, ofrece una mezcla de potencia y confort, ideal para quienes buscan una experiencia de juego más accesible y manejable, especialmente en el contexto defensivo y de contraataque.',
        stock: 9,
        price: 320000,
        category: 'Paddles',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_783945-MLA106920924559_022026-F.webp'
    },
    {
        id:'4',
        name:'Babolat Air Veron',
        description: 'La Air Veron no solo es sinónimo de rendimiento, sino también de versatilidad, combinando manejabilidad, jugabilidad y confort para que cualquier jugador pueda dar lo mejor de sí mismo en la cancha.',
        stock: 7,
        price: 415000,
        category: 'Paddles',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_730068-MLA106291557414_022026-F.webp'
    },
    {
        id:'5',
        name:'NOX AT10',
        description: 'La AT10 Genius 18K Alum para la temporada 2026 eleva el listón de la innovación, evolucionando la pala con la que Agustín Tapia alcanzó la cima del pádel mundial con un nuevo molde.',
        stock: 2,
        price: 750000,
        category: 'Paddles',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_925612-MLA97121415248_112025-F.webp'
    },
    {
        id:'6',
        name:'NOX TI10',
        description: 'Esta pala, diseñada para la colección 2025, está destinada a los jugadores que buscan llevar su rendimiento al siguiente nivel, combinando potencia, control y un diseño atractivo que no pasará desapercibido en la pista.',
        stock: 12,
        price: 450000,
        category: 'Paddles',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_628004-MLA99389993231_112025-F.webp'
    },
    {
        id:'7',
        name:'Adidas Metalbone',
        description: 'La Paleta adidas Metalbone Series Ale Lasaigues 2025 Color Rojo es la elección predilecta para jugadores de pádel que buscan una potencia excepcional y un control adaptable en cada partido.',
        stock: 5,
        price: 350000,
        category: 'Paddles',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_666245-MLA99516591242_112025-F.webp'
    },
    {
        id:'8',
        name:'Royal Gran Torino',
        description: 'La paleta de pádel TORINO de Royal Padel es la elección perfecta para jugadores que buscan un equilibrio entre potencia y control.',
        stock: 8,
        price: 150000,
        category: 'Paddles',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_730907-MLA99487953924_112025-F.webp'
    },
    {
        id:'9',
        name:'Head Zephyr',
        description: 'La paleta de padel Head Zephyr UL 2023 es una opción excepcional para aquellos jugadores intermedios que buscan mejorar su juego.',
        stock: 10,
        price: 250000,
        category: 'Paddles',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_637290-MLA99584024036_122025-F.webp'
    },
    {
        id:'10',
        name:'Head Speed Team 2025',
        description: 'La Head Speed Team 2025 es una pala de pádel de última generación diseñada para jugadores de nivel intermedio y avanzado que buscan un equilibrio perfecto entre potencia, control y versatilidad.',
        stock: 6,
        price: 380000,
        category: 'Paddles',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_880195-MLA99513576544_112025-F.webp'
    },
    {
        id:'11',
        name:'Paletero Babolat Rh Pro',
        description: 'El bolso RH Pro Padel es mucho más que un simple accesorio. Representa una declaración de rendimiento para los jugadores expertos que aspiran a la excelencia en la pista.',
        stock: 2,
        price: 250000,
        category: 'Bags',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_659653-MLA99502209178_112025-F.webp'
    },
    {
        id:'12',
        name:'Mochila Head Tour naranja',
        description: 'Tanto si estás en la pista como de paseo por la ciudad o embarcándote en un viaje en tren o avión, puedes presumir de estilo con el modelo TOUR BACKPACK 25L CB.',
        stock: 4,
        price: 180000,
        category: 'Bags',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_987105-MLA100021147767_122025-F.webp'
    },
    {
        id:'13',
        name:'Raquetero Wilson',
        description: 'Transporta tus raquetas de tenis de forma segura y cómoda con la raqueta Esp Advantage II.',
        stock: 1,
        price: 120000,
        category: 'Bags',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_628309-MLA82053910054_022025-F.webp'
    },
    {
        id:'14',
        name:'Pelotas Bullpadel Next',
        description: 'La pelota Next FIP es una pelota de máxima velocidad que agiliza los partidos y tiene una gran durabilidad.',
        stock: 50,
        price: 20000,
        category: 'Accesories',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_605715-MLA99469426520_112025-F.webp'
    },
    {
        id:'15',
        name:'Pelotas Penn x2',
        description: 'Confeccionadas en fibras Extra-Duty Felt, una tecnología que las hace más duraderas, consistentes, con menos pelos y con mayor velocidad.',
        stock: 30,
        price: 9500,
        category: 'Accesories',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_828340-MLA99990985851_112025-F.webp'
    },
    {
        id:'16',
        name:'Pelotas Babolat Court Paddle',
        description: 'Cada tubo contiene 3 pelotas de alta calidad, diseñadas para ofrecer un rendimiento excepcional en cada juego.',
        stock: 10,
        price: 20000,
        category: 'Accesories',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_940304-MLA99503060096_112025-F.webp'
    },
    {
        id:'17',
        name:'Pelotas Dunlop Fort x3',
        description: 'La pelota Dunlop Fort All Court es adecuada para jugadores de todos los niveles y está diseñada para rendir al máximo en todo tipo de superficies.',
        stock: 15,
        price: 14000,
        category: 'Accesories',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_848652-MLA96869275643_102025-F.webp'
    },
    {
        id:'18',
        name:'Wilson Overgrip Ultra',
        description: 'Con una combinación correcta de fieltro y poliuretano, absorbe el sudor y mantiene las manos secas. Compuesto de un material duradero para un gran rendimiento.',
        stock: 100,
        price: 15000,
        category: 'Accesories',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_930827-MLA99598103362_122025-F.webp'
    },
    {
        id:'19',
        name:'Cubre Grip X-trust',
        description: 'Este over grip profesional está diseñado para ofrecer un agarre firme y duradero, gracias a su fabricación con los mejores materiales.',
        stock: 20,
        price: 9500,
        category: 'Accesories',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_635214-MLA102610245552_122025-F.webp'
    },
    {
        id:'20',
        name:'Muñequeras Head',
        description: 'Nos proporcionan una leve compresión de la muñeca, que evitan los dolores en las articulaciones. Fabricadas con material tipo rizo.',
        stock: 20,
        price: 15000,
        category: 'Accesories',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_750628-MLA104779789628_012026-F.webp'
    }
]


// Promise para simular obtención asincrona de productos
export const getProducts = (hayError, delay = 3000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (hayError) {
                reject(new Error('Hubo un error, intente más tarde'));

            } else {
                resolve(productos);
            }

        }, delay);
    });
};


// Promise para similar la obtención asincrona de un producto
export const getOneProduct = (hayError, delay = 3000, id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hayError) {
                reject(new Error('Error buscando el producto'));
            
            } else {
                let prod = productos.find((p) => p.id === id);
                resolve(prod);
            }
        }, delay);
    });
};