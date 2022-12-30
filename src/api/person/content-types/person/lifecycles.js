module.exports = {
  afterCreate(event) {
    strapi.service('api::person.person').update(
      event.result.id,
      {
        data:{
          fullname:`${event.result.firstName ?? ''} ${event.result.lastName ?? ''}`
        }
      }
    )
  },
  afterUpdate(event) {
    strapi.service('api::person.person').update(
      event.result.id,
      {
        data:{
          fullname:`${event.result.firstName ?? ''} ${event.result.lastName ?? ''}`
        }
      }
    )
  },
};
