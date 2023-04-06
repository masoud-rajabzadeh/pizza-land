'use strict';

/**
 * pizza controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pizza.pizza');
