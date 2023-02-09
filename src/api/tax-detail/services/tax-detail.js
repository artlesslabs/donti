'use strict';

/**
 * tax-detail service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tax-detail.tax-detail', ({strapi})=>({
  async find(params) {
    const { results, pagination } = await super.find({...params, populate:['people']});

    return { results, pagination };
  },
  async findOne(entityId) {
    return await super.findOne(entityId, {populate:['people']});
  }
}));

