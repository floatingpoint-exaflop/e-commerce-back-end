const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findAll } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories andinclude its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value and include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(
      req.body
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const response = await Category.update(req.body, { where: { id: req.params.id } })
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
      const categoryData = await Category.destroy({
      where: {
          id: req.params.id,
      },
      });
      if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
      }
      res.status(200).json(categoryData);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
