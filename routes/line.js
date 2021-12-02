var express = require('express');
var router = express.Router();

/*class Line {
  constructor(line_type, line_thickness,line_color) {
    this.line_type = line_type;
    this.line_thickness = line_thickness;
    this.line_color = line_color;
  }
}*/

/* GET line page. 
router.get('/', function(req, res, next) {
  const line1 = new Line('dotted', 2, 'red');
  const line2 = new Line('solid', 5, 'blue');
  const line3 = new Line('dashed', 3, 'green');
  res.render('line', {line : [line1, line2, line3]});
});*/


const line_controlers= require('../controllers/line'); 
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET lines */ 
router.get('/', line_controlers.line_view_all_Page ); 
/* GET detail line page */ 
router.get('/detail', line_controlers.line_view_one_Page); 
/* GET create line page */ 
router.get('/create', secured, line_controlers.line_create_Page); 
/* GET create update page */ 
router.get('/update', secured, line_controlers.line_update_Page);
/* GET create delete page */ 
router.get('/delete', secured, line_controlers.line_delete_Page); 
module.exports = router;
