import { v4 as uuidv4 } from 'uuid';
import { IEntity } from '../common/IEntity';

interface OperationResultProps {
  type: string;
  result: number;
}

export class OperationResult implements IEntity {
  public readonly uuid: string;
  public readonly type: string;
  public readonly result: number;

  private constructor(props: OperationResultProps) {
    this.uuid = uuidv4();
    this.type = props.type;
    this.result = props.result;
  }

  public static create = (props: OperationResultProps)=> {
    return new OperationResult(props);
  }
}
