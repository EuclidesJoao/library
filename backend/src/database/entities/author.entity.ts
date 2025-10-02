import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from "typeorm";
import { BookEntity } from "./book.entity";

@Entity({ name: "author" })
export class Author {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "full_name", type: "varchar", length: 150 })
  fullName: string;

  @Column({ name: "biography", type: "text", nullable: true })
  biography: string;

  @Column({ name: "birth_date", type: "date", nullable: true })
  birthDate: Date;

  // This defines the other side of the many-to-many relationship
  @ManyToMany(() => BookEntity, (book) => book.authors)
  books: BookEntity[];

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  updatedAt: Date;
}