// handler.js
exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: "Hello <span class='emoji' data-emoji='wave'></span>",
  };
};
