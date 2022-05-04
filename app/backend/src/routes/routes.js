const Router = require('express');
const todosController = require('../controllers/todosController');

const router = Router();

router.get('/agenda', todosController.read);
router.get('/agenda/:id', todosController.readOne);
router.post('/agenda', todosController.create);
router.put('/agenda/:id', todosController.update);
router.delete('/agenda/:id', todosController.deleteTodo);

module.exports = router;