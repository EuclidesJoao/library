import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from "typeorm";
import { Book } from "./book.entity";

@Entity({ name: "book_category" })
export class BookCategory {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "designation", type: "varchar", unique: true })
  designation: string;

  @Column({ name: "description", type: "text", nullable: true })
  description: string;

  @ManyToMany(() => Book, (book) => book.categories)
  books: Book[];

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  updatedAt: Date;
}