package utils

import (
	"crypto/rand"
	"encoding/hex"
)

func GenerateSessionID() (string, error) {
	bytes := make([]byte, 20)

	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}

	return hex.EncodeToString(bytes)[:20], nil
}
