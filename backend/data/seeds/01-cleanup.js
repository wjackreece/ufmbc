const { clean } = require("knex-cleaner");

exports.seed = async function (knex) {
  await knex("Members")
    .del()
    .then(() => {
      return clean(knex, {
        mode: "truncate",
        ignoreTables: ["knex_migrations", "knex_migrations_lock"],
      });
    });
};
