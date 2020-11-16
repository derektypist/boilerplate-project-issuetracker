/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var MongoClient = require('mongodb');
var mongoose = require('mongoose');

let uri = process.env.DB; 

module.exports = function (app) {

  mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true});

  let issueSchema = new mongoose.Schema({
    issue_title: {type: String, required: true},
    issue_text: {type: String, required: true},
    created_by: {type: String, required: true},
    assigned_to: String,
    status_text: String,
    open: {type: Boolean, required: true},
    created_on: {type: Date, required: true},
    updated_on: {type: Date, required: true},
    project: String
  });

  let Issue = mongoose.model('Issue', issueSchema);
  
  
  app.route('/api/issues/:project')
  
    .get(function (req, res){
      var project = req.params.project;
      let filterObject = Object.assign(req.query);
      filterObject['project'] = project;
      Issue.find(filterObject, (error, arrayOfResults) => {
        if(!error && arrayOfResults) {
          return res.json(arrayOfResults);
        }
      });
    })
    
    .post(function (req, res){
      var project = req.params.project;
      
    })
    
    .put(function (req, res){
      var project = req.params.project;
      
    })
    
    .delete(function (req, res){
      var project = req.params.project;
      
    });
    
};
