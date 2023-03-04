import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ZipCode {
  @Column()
  address!: string[];
}
