const newman = require("newman");
require("dotenv").config();

console.log("env keys:",process.env.PMAT_KEY);
newman.run(
  {
    collection: `https://api.postman.com/collections/23316531-7d5da6db-2e32-4a10-b3f0-8a426e6b89ff?access_key=${process.env.PMAT_KEY}`,
    //collection:require(`./DM_API_HASAN.postman_collection_V2.json`)
    
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html",
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete");
  }
);
