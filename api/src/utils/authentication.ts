import jwt from "jsonwebtoken";

class Authentication {
  static signToken(username: string, account: string): string | undefined {
    return jwt.sign(
      { username, active: true, account },
      process.env.PRIVATEKEY || "PRIVATEKEY"
    );
  }

  static decodeToken(token: string | undefined, account: string[]): boolean {
    try {
      const tokenBearer = token?.split(" ")[1];
      console.log(tokenBearer);
      var decoded: any = jwt.verify(
        tokenBearer || "token",
        process.env.PRIVATEKEY || "PRIVATEKEY"
      );
   
      for (var i = 0; i <= account.length - 1; i++) {
        if (account[i] == decoded.account) {
          return true;
        }
      }

      return false;
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
