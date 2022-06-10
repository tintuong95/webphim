import jwt from "jsonwebtoken";

class Authentication {
  static signToken(username: string): string | undefined {
    return jwt.sign({ username,active:true }, process.env.PRIVATEKEY || "PRIVATEKEY");
  }

  static decodeToken(token: string | undefined): boolean {
    try {
      const tokenBearer = token?.split(" ")[1];
      var decoded = jwt.verify(
        tokenBearer || "token",
        process.env.PRIVATEKEY || "PRIVATEKEY"
      );
      
      return true;
    } catch (err) {
      return false;
    }
  }

  static logoutToken(): string | undefined {
    return jwt.sign({}, process.env.PRIVATEKEY || "PRIVATEKEY", {
      expiresIn: 100, // expires in 24 hours
    });
  }
}

export default Authentication;
