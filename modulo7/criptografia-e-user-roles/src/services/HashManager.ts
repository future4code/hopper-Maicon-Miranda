//Exercício 1

import * as bcript from "bcryptjs";

//Exercício 1 b)

export class HashManager {
  async hash(plainText: string): Promise<string> {
    const count = Number(process.env.BCRYPT_COST);
    const salt = await bcript.genSalt(count);

    return bcript.hash(plainText, salt);
  }

//Exercício 1 c)

  async compare(plainText: string, cypherText: string): Promise<boolean> {
    return bcript.compare(plainText, cypherText);
  }
}
