import { ObjectLiteral, Repository } from "typeorm";

function getService<Entity extends ObjectLiteral, DTOClass extends object>(
  entity: new () => Entity,
  dtoClass: new () => DTOClass
) {
  class Service {
    constructor(public readonly repository: Repository<Entity>) {}

    async create(data: DTOClass) {
      const newData = await this.repository
        .createQueryBuilder()
        .insert()
        .into(entity)
        .values({ ...data })
        .execute();
      return newData;
    }
    async delete() {}
    async update() {}
    async find() {}
    async findById() {}
  }
  return Service;
}

export default getService;
