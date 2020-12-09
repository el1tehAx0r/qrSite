// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Stage, Performance, Message } = initSchema(schema);

export {
  Stage,
  Performance,
  Message
};