const controller = {
  index: (req, res) => {
    const products = [
      {
        name: 'Sudadera Deportiva',
        img: '/images/ropa-deportiva/conj-dep-gris.jpg',
        price: 119000,
      },
      {
        name: 'Bascula Digital',
        img: '/images/ropa-deportiva/bascula.jpeg',
        price: 68000,
      },
      {
        name: 'Mat de Yoga Doble Fax',
        img: '/images/ropa-deportiva/colchoneta-yoga.jpg',
        price: 72000,
      },
      {
        name: 'Mancuerna Encauchetada',
        img: '/images/ropa-deportiva/mancuerna-encauchetada-sportfitness.jpg',
        price: 125000,
      },
      {
        name: 'Saco de Boxeo 23 KG',
        img: '/images/ropa-deportiva/saco-de-boxeo-23-kg-sportfitness.jpg',
        price: 376000,
      },
      {
        name: 'Set Body Pump',
        img: '/images/ropa-deportiva/set-body-pump-sportfitness.jpg',
        price: 450000,
      },
      {
        name: 'Colchoneta',
        img: '/images/ropa-deportiva/colchoneta.jpg',
        price: 90000,
      },
      {
        name: 'Step Aerobico',
        img: '/images/ropa-deportiva/steps-aerobicos-sportfitness.jpg',
        price: 120000,
      },
      {
        name: 'Sudadera Deportiva',
        img: '/images/ropa-deportiva/conjunto.png',
        price: 130000,
      },
      {
        name: 'Set de Bandas Elasticas x5',
        img: 'images/ropa-deportiva/bandas.png',
        price: 32000,
      },
    ];

    res.render('index', { products });
  },
};

module.exports = controller;
