import { Seeder, Factory } from 'typeorm-seeding';
import { Connection, getManager } from 'typeorm';
import { User } from '../../modules/user/user.entity';

export class UserCreateSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    // Truncate old data before seeding
    // Truncate table and reset auto increment id (default is CONTINUE IDENTITY)
    await getManager().query('TRUNCATE TABLE users RESTART IDENTITY');

    await factory(User)().create({
      name: 'Binh Dang',
      email: 'binhdt@gmail.com',
      password: 'abc@31',
    });

    // await factory(User)().create();
    await factory(User)().createMany(10);
  }
}
