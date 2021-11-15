const line = require('../models/line');
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

// Handle a show one view with id specified by query 
exports.line_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Line.findById( req.query.id) 
        res.render('lineDetail',  
{ title: 'Line Detail', toShow: result, inputId: req.query.id }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
//Handle building the view for creating a line. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.line_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('lineCreate', { title: 'Line Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a line. 
// query provides the id 
exports.line_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Line.findById(req.query.id) 
        res.render('lineUpdate', { title: 'Line Update', toShow: result, inputId: req.query.id }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.line_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await line.findById(req.query.id) 
        res.render('lineDelete', { title: 'Line Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
exports.line_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Line.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    }
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

 
exports.line_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Line.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
 

exports.line_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await Line.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.line_type)  
                   toUpdate.line_type = req.body.line_type; 
            if(req.body.line_thickness) toUpdate.line_thickness = req.body.line_thickness; 
            if(req.body.line_color) toUpdate.line_color = req.body.line_color; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`); 
        } 
};

