import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface paplu {
  arr_obj: string[];
  field: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ default: false })
  isActive2: boolean;

  @Column('json', {
    default: {
      arr_obj: [],
      field: 'string',
    },
  })
  paplu: paplu;
}
