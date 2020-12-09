import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Stage {
  readonly id: string;
  readonly name: string;
  readonly performances?: (Performance | null)[];
  constructor(init: ModelInit<Stage>);
  static copyOf(source: Stage, mutator: (draft: MutableModel<Stage>) => MutableModel<Stage> | void): Stage;
}

export declare class Performance {
  readonly id: string;
  readonly productID?: string;
  readonly performer: string;
  readonly imageUrl?: string;
  readonly description: string;
  readonly time?: string;
  readonly stage?: Stage;
  constructor(init: ModelInit<Performance>);
  static copyOf(source: Performance, mutator: (draft: MutableModel<Performance>) => MutableModel<Performance> | void): Performance;
}

export declare class Message {
  readonly id: string;
  readonly title: string;
  readonly color?: string;
  readonly image?: string;
  readonly createdAt?: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}