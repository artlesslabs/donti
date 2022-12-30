'use strict';

/**
 * lead service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lead.lead', ({strapi})=>({
  async find(params) {
    const { results, pagination } = await super.find({...params, populate:['leadUpdates']});

    return { results, pagination };
  },
  async findOne(entityId) {
    return await super.findOne(entityId, {populate:['leadUpdates']});
  }
}));

