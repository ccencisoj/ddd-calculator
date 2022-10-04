import { Schema, model } from 'mongoose';

const OperationResultSchema = new Schema({
  uuid: {type: String, required: true},
  type: {type: String, required: true},
  result: {type: Number, required: true}
});

const OperationResultModel = model("OperationResult", OperationResultSchema);

export { OperationResultModel };
