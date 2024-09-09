'use strict';

/**
 * wash-pricing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wash-pricing.wash-pricing');
