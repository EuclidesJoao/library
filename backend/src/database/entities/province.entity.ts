import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { CountryEntity } from "./country.entity";

@Entity({ name: "province" })
export class ProvinceEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ name: "designation", type: "varchar", unique: true })
  designation: string;

  @ManyToOne(() => CountryEntity, (country) => country.id)
  country: CountryEntity;

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  updated_at: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp with time zone" })
  deleted_at: Date;
}
