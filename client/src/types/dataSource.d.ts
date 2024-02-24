type MqttConfiguration = {
    broker: string;
    topic: string;
    qos: number;
};

type RedisConfiguration = {
    address: string;
    username: string;
    password: string;
    database: string;
    channel: string;
};

type DataSourceSchema = {
    id: string;
    name: string;
    type: "MQTT" | "REDIS";
    configuration: Omit<MqttConfiguration, "topic"> | Omit<RedisConfiguration, "channel">;
};

type CreateDataSource = Omit<DataSourceSchema, "id">;

type GetAllDataSources = {
    dataSources: Array<DataSourceSchema>;
};
