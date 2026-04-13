const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("../config/env");
const Users = require("../models/userModel");

module.exports = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret,
  };

  passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
      try {
        const user = await Users.findByPk(jwtPayload.id);

        if (!user) {
          return done(null, false);
        }

      
        return done(null, user);

      } catch (error) {
        console.error("Error verifying JWT:", error);
        return done(error, false);
      }
    })
  );
};