const fastify = require("fastify")();
const multer = require("fastify-multer");
const upload = multer();
// fastify.register(multer.contentParser);

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

// upload.single('profile_image')

fastify.post(
  "/thumbnail",
  async function (request, reply) {
    let a = await new Promise((resolve, reject) => {
        let data;
        //@ts-ignore
        return upload.single("profile_image")(request, {}, function (err) {
          if (err) {
            console.log(err);
            return resolve("error");
          }
          //@ts-ignore
          data = request.file;
          return resolve(data);
        });
      });

      console.log(a);
    // console.log(request.file);
    // request.file is the `avatar` file
    // request.body will hold the text fields, if there were any
    reply.code(200).send("SUCCESS");
  }
);

fastify.listen(3000, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${fastify.server.address().port}`);
});
