exports.handler = async (event) => {
  console.log(JSON.stringify(event));
  return {
    principalId: "user",
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "*",
          Effect: "Allow",
          Resource: "*",
        },
      ],
    },
  };
};
