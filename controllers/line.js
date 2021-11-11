var Line = require('../models/line'); 
 

exports.line_list = async function(req, res) { 
    try{ 
        theLines = await Line.find(); 
        res.send(theLines); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
  
// VIEWS 
// Handle a show all view 
exports.line_view_all_Page = async function(req, res) { 
    try{ 
        theLines = await Line.find(); 
        res.render('line', { title: 'Line Search Results', results: theLines }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
exports.line_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: line detail: ' + req.params.id); 
}; 
 

 
// Handle Line create on POST. 
exports.line_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Line(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"line_type":"dashed", "line_thickness":12, "line_color":"purple"} 
    document.line_type = req.body.line_type; 
    document.line_thickness = req.body.line_thickness; 
    document.line_color = req.body.line_color; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.line_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: line delete DELETE ' + req.params.id); 
}; 
 

exports.line_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: line update PUT' + req.params.id); 
}; 