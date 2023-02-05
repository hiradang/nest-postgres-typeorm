import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User extends BaseEntity {
  @ApiProperty({
    description: 'id',
    example: '1',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Name',
    example: 'Binh Dang',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Email',
  })
  @Column({
    unique: true,
  })
  email: string;

  @ApiProperty({
    description: 'Encrypted password',
  })
  @Column()
  password: string;

  @ApiProperty({
    description: 'When user is created',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'When user is updated',
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async encodePassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
