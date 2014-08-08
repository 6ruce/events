namespace Events.Backstage.Common.CommonDomain.CommonValidation

module Validation = 
    type ValidationResult =
        | Success
        | Errors of (string * string list)

    type ValidatorResult =
        | Success
        | Error of string

    type Validator<'a> = 'a -> ValidatorResult

    let private apply<'a> (name : string) (validators : Validator<'a> list) (value : 'a) : ValidationResult =
        let collectErrors validate =
             match validate value with
             | ValidatorResult.Success       -> None
             | ValidatorResult.Error message -> Some(message)
        let errors = List.choose collectErrors validators
        match errors with
        | [] -> ValidationResult.Success
        | _  -> ValidationResult.Errors (name, errors)


    let validate (validationData : (string * Validator<'a> list * 'a) list) =
        let collectErrors (fieldName, validators, fieldValue) =
            match apply fieldName validators fieldValue with
            | ValidationResult.Success -> None
            | ValidationResult.Errors fieldErrors -> Some(fieldErrors)
        List.choose collectErrors validationData