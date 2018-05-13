'use strict';

/**
 * Comments.js controller
 *
 * @description: A set of functions called "actions" for managing `Comments`.
 */

module.exports = {

  /**
   * Retrieve comments records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.comments.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a comments record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.comments.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an comments record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.comments.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an comments record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.comments.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an comments record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.comments.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
