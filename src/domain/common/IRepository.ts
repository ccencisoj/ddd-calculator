export interface IRepository<Entity> {
  findOne(filter: object): Promise<Entity|null>,
  findMany(filter: object, {skip, limit}: {skip: number, limit: number}): Promise<Entity[]|null>,
  save(entity: Entity|{uuid:string}): Promise<void>,
  delete(filter: object): Promise<void>
};
