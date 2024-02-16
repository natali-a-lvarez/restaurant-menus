const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  afterAll(async () => await sequelize.sync({ force: true }));

  test("can create a Restaurant", async () => {
    // TODO - write test
    const restaurant = await Restaurant.create(seedRestaurant[0]);
    expect(restaurant.name).toEqual("AppleBees");
  });

  test("can create a Menu", async () => {
    // TODO - write test
    const menu = await Menu.create(seedMenu[0]);
    expect(menu.title).toEqual("Breakfast");
  });

  test("can find Restaurants", async () => {
    // TODO - write test
    const allRestaurants = await Restaurant.findAll();
    expect(allRestaurants[0].name).toEqual("AppleBees");
  });

  test("can find Menus", async () => {
    // TODO - write test
    const allMenus = await Menu.findAll();
    expect(allMenus[0].title).toEqual("Breakfast");
  });

  test("can delete Restaurants", async () => {
    // TODO - write test
    await Restaurant.destroy({ where: { name: "AppleBees" } });

    const deletedRestaurant = await Restaurant.findAll({
      where: { name: "AppleBees" },
    });
    expect(await Restaurant.findAll()).toHaveLength(0);
  });
});
