var express = require('express');
var router = express.Router();

class Line {
  constructor(line_type, line_thickness,line_color) {
    this.line_type = line_type;
    this.line_thickness = line_thickness;
    this.line_color = line_color;
  }
}

/* GET line page. */
router.get('/', function(req, res, next) {
  const line1 = new Line('dotted', 2, 'red');
  const line2 = new Line('solid', 5, 'blue');
  const line3 = new Line('dashed', 3, 'green');
  res.render('line', {line : [line1, line2, line3]});
});

module.exports = router;
