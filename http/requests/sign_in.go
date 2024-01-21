package requests

import (
	validation "github.com/go-ozzo/ozzo-validation/v4"
	"github.com/go-ozzo/ozzo-validation/v4/is"
	"github.com/mateusrlopez/funcify/entities"
)

type SignIn struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (req *SignIn) ToEntity() entities.User {
	return entities.User{
		Email:    req.Email,
		Password: req.Password,
	}
}

func (req *SignIn) Validate() error {
	return validation.ValidateStruct(req,
		validation.Field(req.Email, validation.Required, is.Email),
		validation.Field(req.Password, validation.Required, validation.Min(8)),
	)
}
