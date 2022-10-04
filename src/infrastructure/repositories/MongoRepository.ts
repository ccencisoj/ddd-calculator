import { Model } from 'mongoose';
import { IRepository, IEntity } from '../../domain';

export class MongoRepository<Entity> implements IRepository<Entity> {
  protected readonly model: Model<any>;

  constructor(model: Model<any>) {
    this.model = model;
  }

  public findOne = async (filter: object): Promise<Entity|null> => {
    return await this.model.findOne(filter);
  }

  public findMany = async (filter: object, {skip, limit}: {skip: number, limit: number}): Promise<Entity[] | null> => {
    return await this.model.find(filter).skip(skip).limit(limit);
  }

  public save = async (entity: Entity|{uuid:string}): Promise<void> => {
    if(entity && "uuid" in entity) {
      const entityId = entity.uuid;

      const alreadyCreated = await this.exists(entityId);

      if(alreadyCreated) {
        await this.model.findOneAndUpdate({uuid: entityId}, entity);

      }else {
        await this.model.create(entity);
      }
    }
  }

  public delete = async (filter: object): Promise<void> => {
    await this.model.findOneAndDelete(filter);
  }

  private exists = async (entityId: string): Promise<boolean> => {
    const entityOrNull = await this.model.findOne({uuid: entityId});
    return entityOrNull === null ? false : true;
  }
};
