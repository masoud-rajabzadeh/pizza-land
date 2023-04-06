'use strict';

/**
 * pizza service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pizza.pizza');
