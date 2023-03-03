const db = require("../config/connection");
const { Item, Admin } = require("../models");
const ItemData = require("./itemData.json");

const AdminData = require("./adminSeed");

db.once("open", async () => {
  await Item.deleteMany({});
  await Admin.deleteMany({});

  // bulk create each model
  const items = await Item.insertMany(ItemData);
  const admins = await Admin.create(AdminData);

  console.log("all done!");
  process.exit(0);
});