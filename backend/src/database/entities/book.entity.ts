import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  DeleteDateColumn,
  OneToMany
} from "typeorm";
import { BookCategory } from "./book-category.entity";
import { Author } from "./author.entity";
import { InventoryItem } from "./inventoryItem.entity";

export enum BookFormat {
  HARDCOVER = "hardcover",
  PAPERBACK = "paperback",
  EBOOK = "ebook",
  AUDIOBOOK = "audiobook",
}

@Entity({ name: "book" })
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255, unique: true })
  title: string;

  @Column({ name: "isbn", type: "varchar", length: 13, unique: true, nullable: true })
  isbn: string;

  @Column({ name: "description", type: "text", nullable: true })
  description: string;
  
  @Column({ name: "publisher", type: "varchar", length: 100, nullable: true })
  publisher: string;

  @Column({ name: "publication_date", type: "date", nullable: true })
  publicationDate: Date;

  @Column({ name: "page_count", type: "int", nullable: true })
  pageCount: number;

  @Column({ name: "cover_image_url", type: "varchar", nullable: true })
  coverImageURL: string;

  @Column({ type: "varchar", length: 5, default: 'en' }) // e.g., 'en', 'pt', 'fr'
  language: string;

  @Column({
    type: "enum",
    enum: BookFormat,
    default: BookFormat.PAPERBACK
  })
  format: BookFormat;

  @ManyToMany(() => Author, (author) => author.books, { cascade: true })
  @JoinTable({
    name: "book_author",
    joinColumn: { name: "book_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "author_id", referencedColumnName: "id" },
  })
  authors: Author[];

  @ManyToMany(() => BookCategory, (category) => category.books)
  @JoinTable({
    name: "book_has_category",
    joinColumn: { name: "book_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "category_id", referencedColumnName: "id" },
  })
  categories: BookCategory[];

    // A book can have multiple inventory records (e.g., one per location)
  @OneToMany(() => InventoryItem, (inventoryItem) => inventoryItem.book)
  inventory: InventoryItem[];

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp with time zone", nullable: true })
  deletedAt: Date;
}