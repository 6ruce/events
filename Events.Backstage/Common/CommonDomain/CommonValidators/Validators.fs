namespace Events.Backstage.Common.CommonDomain.CommonValidators

module Validators =
    type ValidationResult =
        | Success
        | Errors of (string * string list)

    type ValidatorResult =
        | Success
        | Error of string

    type Validator<'a> = 'a -> ValidatorResult

    let NotEmpty (str : string) : ValidatorResult =
        match str with
        | null | "" -> Error "{:param} is empty."
        | _ -> Success

    let apply<'a> (name : string) (validators : Validator<'a> list) (value : 'a) : ValidationResult =
        let collectErrors validate =
             match validate value with
             | Success -> None
             | Error message -> Some(message)
        let errors = List.choose collectErrors validators
        match errors with
        | [] -> ValidationResult.Success
        | _ -> ValidationResult.Errors (name, errors)