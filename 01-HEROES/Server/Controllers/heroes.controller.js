const HeroesModel = require('../Models/heroes.model');
const heroesController = {};


heroesController.getHeroes = async (req, res) => {
  const heroes = await HeroesModel.find();
  res.json(heroes);
};

heroesController.createHero = async (req, res) => {
  const hero = new HeroesModel(req.body);
  await hero.save();
  res.json({
    status: 'Hero is save'
  })
};

heroesController.getHero = async (req, res) => {
  const hero = await HeroesModel.findById(req.params.id);
  console.log(hero);
  res.json({
    status: 'Received',
    hero: hero
  });
};

heroesController.editHero = async (req, res) => {
  const hero = {
    nombre: req.body.nombre,
    bio: req.body.bio,
    img: req.body.img,
    aparicion: req.body.aparicion,
    casa: req.body.casa
  };
  await HeroesModel.findByIdAndUpdate(req.params.id, {$set: hero}, {new: true});
  res.json({
    status: 'Hero is updated'
  })
}

heroesController.deleteHero = async (req, res) => {
  await HeroesModel.findByIdAndRemove(req.params.id);
  res.json({
    status: 'Hero is destroyed'
  })
}



module.exports = heroesController;
