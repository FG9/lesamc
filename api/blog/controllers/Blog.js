'use strict';

/**
 * Blog.js controller
 *
 * @description: A set of functions called "actions" for managing `Blog`.
 */

module.exports = {

  /**
   * Retrieve blog records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.blog.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a blog record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.blog.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an blog record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.blog.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an blog record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.blog.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an blog record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.blog.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
