#!/usr/bin/env node

/*

Export data from Google Spreadsheet to json array.

*/

var GoogleSpreadsheets = require("google-spreadsheets");
var fs = require('fs');
var dir = './../json/';


GoogleSpreadsheets.rows({
    key: "1yu1AyFVyeLHp55t6uwYs65QICDqXnQlpW5RVgcEh_eI",
    worksheet: 1 
}, function(err, cells) {
    data = [];
    cells.forEach(function(row, y) {
  
        var obj = {};
        for(var key in row){
        	if (key != 'updated' && key != 'title' && key != 'content' && (typeof row[key] === 'string')) {
        		obj[key] = row[key].trim();
        	}
		}
		data.push({
            county: obj.county
        });
        fs.writeFile(dir + obj.county.replace(' ', '_') + '.json', JSON.stringify(obj)); 
        
    });
    fs.writeFile(dir + 'counties.json', JSON.stringify(data)); 
})

