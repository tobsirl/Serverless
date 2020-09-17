exports.handler = async (event) => {
  // TODO implement

  const randomNumber = Math.floor(Math.random() * 11);
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*"
    //  },
    body: JSON.stringify(`Random Number: ${randomNumber}`),
  };
  return response;
};
