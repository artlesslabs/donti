'use strict';

/**
 * user-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-profile.user-profile', ({strapi})=>({
  async find(params) {
    const { results, pagination } = await super.find({...params, populate:['avatar']});

    return { results, pagination };
  },
  async findOne(entityId) {
    return await super.findOne(entityId, {populate:['avatar']});
  }
}));
