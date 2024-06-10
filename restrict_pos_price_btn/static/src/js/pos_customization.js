odoo.define('restrict_pos_price_btn.ActionButton', function (require) {
"use strict";

var models = require('point_of_sale.models');
    /** To load fields into model res user in pos **/
    models.load_fields('res.users', "price");

var screens = require('point_of_sale.screens');
var core = require('web.core');

var DashboardButton = screens.ActionButtonWidget.extend({
    template: 'DashBoardButton',
    button_click: function() {
        alert("Dashboard button clicked");
    },
});

screens.define_action_button({
    'name': 'Dashboard',
    'widget': DashboardButton,
    'condition': function(){return this.pos;},
});


});
