import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('user')
export class UserEntity extends BaseEntity{

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

}