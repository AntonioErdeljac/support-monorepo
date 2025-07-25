import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users;
  }
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const user = await ctx.db.insert("users", {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return user;
  }
})
