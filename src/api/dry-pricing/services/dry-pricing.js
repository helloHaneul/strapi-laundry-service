'use strict';

/**
 * dry-pricing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dry-pricing.dry-pricing');
