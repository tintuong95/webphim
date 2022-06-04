import bcrypt from "bcrypt";

const salt: string = process.env.SALTROUND || "10";

class HashPass {
  static hashPassword(password: string): string {
    return bcrypt.hashSync(password, Number(salt));
  }

  static comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}

export default HashPass