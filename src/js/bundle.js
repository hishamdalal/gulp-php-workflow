const  {count} = require('./inc/counter');
const {dark_mode} = require('./inc/_dark_mode');
const {nav} = require('./inc/_nav');
const {tabs} = require('./inc/_tabs');
//const {sweet_alert} = require('./inc/_sweetalert');
// const {toast} = require('./inc/_toast');
const {sweet_alert} = require('../vendors/sweet-alert/_index');
const {toast} = require('../vendors/toast/_index');

count()
dark_mode();
nav();
tabs();
sweet_alert();
toast();
