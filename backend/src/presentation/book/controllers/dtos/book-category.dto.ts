import { IsNotEmpty, IsString } from "class-validator";

export class BookCategoryDTO{
    @IsString({message: "Designação deve ser uma string"})
    @IsNotEmpty()
    designacao: string    
}