package connectors

import (
	"context"
	mqtt "github.com/eclipse/paho.mqtt.golang"
)

type mqttConnector struct {
	client mqtt.Client
	topic  string
	qos    byte
}

func NewMqttConnector(client mqtt.Client, topic string, qos byte) Connector {
	return mqttConnector{
		client: client,
		topic:  topic,
		qos:    qos,
	}
}

func (c mqttConnector) Listen(dataChan chan []byte, errorChan chan error, ctx context.Context) {
	for {
		select {
		case <-ctx.Done():
			c.client.Disconnect(0)
			return
		default:
			handler := func(client mqtt.Client, message mqtt.Message) {
				payload := message.Payload()
				dataChan <- payload
			}

			if token := c.client.Subscribe(c.topic, c.qos, handler); token.Wait() && token.Error() != nil {
				errorChan <- token.Error()
			}
		}
	}
}

func (c mqttConnector) Publish(dataChan chan []byte, errorChan chan error, ctx context.Context) {
	for {
		select {
		case <-ctx.Done():
			c.client.Disconnect(0)
			return
		case data := <-dataChan:
			if token := c.client.Publish(c.topic, c.qos, false, data); token.Wait() && token.Error() != nil {
				errorChan <- token.Error()
			}
		}
	}
}