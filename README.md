# REST API to access MongoDB
Following online tutorials to set up a MongoDB (cloud) server that will be accessed over the mongoose package. Implement CRUD operations.

# Development environment
Have everything on the cloud.

## IDE
Maybe: replit free version

## Database server
MongoDB free cloud.

### Mongoose
Using mongoose to connect with.
```
main().catch((err) => console.log(err)).then(() => console.log("Database connected"));
async function main() {
  await mongoose.connect(mongoDB);
}
```

# Packages
Using npm ecosystem.

Run `npm init` in order to set up the first version of *package.json*.

Install *express* as the backend's webserver by run  `npm install express`.

Install *mongoose* for MongoDB by `npm install mongoose`