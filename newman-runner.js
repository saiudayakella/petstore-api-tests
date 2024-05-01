const newman = require("newman");

newman.run(
  {
    collection: require("./Petstore.postman_collection.json"),
    reporters: ["cli", "html"],
    reporter: {
      html: {
        export: `./reports/report-${new Date()}.html`,
      },
    },
  },
  function (err) {
    if (err) {
      throw new Error("Error running collection: ", err);
    }
  }
);
