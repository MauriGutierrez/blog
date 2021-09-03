import { BaseEntity, BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('user')
export class UserEntity extends BaseEntity {

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @BeforeInsert()
  emailToLowerCase(){
    this.email = this.email.toLowerCase();
  }

}

