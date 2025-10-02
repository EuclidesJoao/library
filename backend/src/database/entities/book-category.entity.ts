import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from "typeorm";
import { BookEntity } from "./book.entity";

@Entity({ name: "book_category" })
export class BookCategoryEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "designation", type: "varchar"})
  designation: string;

  @Column({ name: "description", type: "text", nullable: true })
  description: string;

  @ManyToMany(() => BookEntity, (book) => book.categories)
  books: BookEntity[];

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  updatedAt: Date;
}
