'use strict';

/**
 * pizza router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pizza.pizza');
