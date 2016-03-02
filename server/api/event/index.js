'use strict';

var express = require('express');
var controller = require('./event.controller');
var router = express.Router();
import * as auth from '../../auth/auth.service';


router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);


module.exports = router;
