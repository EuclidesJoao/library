import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { ProvinceEntity } from "./province.entity";

@Entity({ name: "country" })
export class CountryEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ name: "designation", type: "varchar", unique: true })
  designation: string;

  @OneToMany(() => ProvinceEntity, (province) => province.id)
  provinces: ProvinceEntity;

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  updated_at: Date;

  @DeleteDateColumn({ name: "deteled_at", type: "timestamp with time zone" })
  deleted_at: Date;
}
