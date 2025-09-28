export interface IUserRole{
    id: number;
    designation: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface ICreateUserRole{
    designation: string;
}

export interface IUpdateUserRole{
    designation: string;
} 



