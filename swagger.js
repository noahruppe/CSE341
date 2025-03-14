const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "user API",
        description: "userAPI"
    },
    host: "https://cse341-xats.onrender.com/users",
    schemes: ["https"]
}

const outputfile = "./swagger.json";
const endpointfile = ["./routes/lesson1"];

swaggerAutogen(outputfile, endpointfile, doc);
