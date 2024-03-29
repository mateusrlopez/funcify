"use client";

import { DeleteDataSourceModal } from "@/app/(internal)/app/datasources/DeleteDataSourceModal";
import { Dropdown } from "@/components/Dropdown";
import { DataSourceSchema, MqttConfiguration, RedisConfiguration } from "@/types/dataSource";
import { ReactNode, useState } from "react";
import { MdDelete } from "react-icons/md";
import { TbDots } from "react-icons/tb";

import { Root, Name, Text, Actions } from "./Item.styles";

type MqttProps = MqttConfiguration;

const MQTT = ({ broker, qos, topic }: MqttProps): ReactNode => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Text>
            <strong>Broker:</strong> {broker}
        </Text>
        <Text>
            <strong>QOS:</strong> {qos}
        </Text>
        <Text>
            <strong>Topic:</strong> {topic}
        </Text>
    </div>
);

type RedisProps = Omit<RedisConfiguration, "password">;

const Redis = ({ address, username, database, channel }: RedisProps): ReactNode => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Text>
            <strong>Address:</strong> {address}
        </Text>
        <Text>
            <strong>Username:</strong> {username}
        </Text>
        <Text>
            <strong>Database:</strong> {database}
        </Text>
        <Text>
            <strong>Channel:</strong> {channel}
        </Text>
    </div>
);

type Props = DataSourceSchema;

const Item = (props: Props): ReactNode => {
    const [modalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false);

    return (
        <Root>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Name>{props.name}</Name>
                <Dropdown>
                    <Dropdown.Trigger>
                        <Actions>
                            <TbDots size={18} />
                        </Actions>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Item onClick={() => setModalDeleteOpen(true)}>
                            <MdDelete />
                            Delete data source
                        </Dropdown.Item>
                    </Dropdown.Content>
                </Dropdown>
            </div>

            {props.type === "MQTT" ? (
                <MQTT {...(props.configuration as MqttProps)} />
            ) : (
                <Redis {...(props.configuration as RedisProps)} />
            )}

            <DeleteDataSourceModal open={modalDeleteOpen} setOpen={setModalDeleteOpen} {...props} />
        </Root>
    );
};

export { Item };
