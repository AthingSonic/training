const jwt = require("jsonwebtoken");

function jwtGenerator(user_id) {
  const payload = {
    user: {
      id: user_id,
    },
  };
  /*
    command to generate secret key
    $ openssl rand -base64 32
    $ openssl rand -base64 64
    */
  return jwt.sign(payload, process.env.jwt_secret_key, { expiresIn: "1h" });
}

module.exports = jwtGenerator;
