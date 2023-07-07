/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author:Imam Hossain
 * Date: 07-07-2023
 *
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
