exports.handler = async (event) => {
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
