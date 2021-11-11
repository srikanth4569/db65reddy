var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var line_controller = require('../controllers/line'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
  
router.post('/line', line_controller.line_create_post); 
 
 
router.delete('/line/:id', line_controller.line_delete); 
 
 
router.put('/line/:id', 
line_controller.line_update_put); 
 

router.get('/line/:id', line_controller.line_detail); 
 
 
router.get('/line', line_controller.line_list); 
 
module.exports = router; 