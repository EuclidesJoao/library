import { InsertResult } from "typeorm";
import getService from "../../../base/service";
import { BookCategoryEntity } from "../../../database/entities/book-category.entity";
import { BookCategoryDTO } from "../controllers/dtos/book-category.dto";

class bookCategoryService extends getService(BookCategoryEntity, BookCategoryDTO){

    override async create(data: BookCategoryDTO): Promise<InsertResult> {
        return await super.create(data)
    }
}