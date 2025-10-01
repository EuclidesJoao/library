import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Book } from "./book.entity";

@Entity({ name: "inventory_item" })
export class InventoryItem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // A unique identifier for stock management, different from ISBN.
  @Column({ name: "sku", type: "varchar", unique: true })
  sku: string;

  @Column({ name: "quantity", type: "int", default: 0 })
  quantity: number;

  // You can track stock per location
  @Column({ name: "location", type: "varchar", nullable: true })
  location: string; // e.g., "Warehouse A", "Downtown Store"

  // --- Relationship to the Book ---
  // Each inventory item is linked to exactly one book.
  @ManyToOne(() => Book, (book) => book.inventory, { nullable: false })
  @JoinColumn({ name: "book_id" })
  book: Book;

  // --- Timestamps ---
  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  updatedAt: Date;
}