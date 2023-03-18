const fs = require("fs");
module.exports = {
    devServer: {
        https: true,
        https: {
            key: fs.readFileSync("./https/localhost.key"),
            cert: fs.readFileSync("./https/localhost.pem"),
        },
        public: "https://localhost:8080/",
    },
};
