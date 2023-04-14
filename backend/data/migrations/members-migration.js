exports.up = async (knex) => {
  await knex.schema.createTable("Members", (bcs) => {
    bcs.increments("memberID");
    bcs.boolean("active");
    bcs.string("birthday", 200);
    bcs.string("firstName", 200);
    bcs.string("middleName", 200);
    bcs.string("lastName");
    bcs.string("prefix", 200);
    bcs.string("suffix", 200);
    bcs.string("title", 200);
    bcs.boolean("retired");
    bcs.string("address", 200);
    bcs.string("city", 200);
    bcs.string("state", 200);
    bcs.string("zip", 200);
    bcs.string("email", 200);
    bcs.boolean("visitor");
    bcs.string("visitorChurch", 200);
    bcs.string("visitorPastor", 200);
    bcs.boolean("baptism");
    bcs.string("baptismDate", 200);
    bcs.string("baptismChurch", 200);
    bcs.string("baptismCity", 200);
    bcs.string("baptismState", 200);
    bcs.string("occupation", 200);
    bcs.string("emergencyContactName", 200);
    bcs.string("emergencyContactPhoneNumber", 200);
    bcs.string("spouseFirstName", 200);
    bcs.string("spouseMiddleName", 200);
    bcs.string("spouseLastName");
    bcs.string("spousePrefix", 200);
    bcs.string("spouseSuffix", 200);
    bcs.string("spouseTitle", 200);
    bcs.string("worshipServiceTime", 200);
    bcs.string("lastUpdate", 200);
    bcs.string("updateAdmin", 200);
    bcs.timestamps(false, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("Members");
};
