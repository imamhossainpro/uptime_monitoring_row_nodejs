/*
 * Title: Routes
 * Description: Application Routes
 * Author:Imam Hossain
 * Date: 07-07-2023
 *
 */

// dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandlers");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
