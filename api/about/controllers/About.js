'use strict';

/**
 * About.js controller
 *
 * @description: A set of functions called "actions" for managing `About`.
 */

module.exports = {

  /**
   * Retrieve about records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.about.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a about record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.about.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an about record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.about.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an about record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.about.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an about record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.about.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
