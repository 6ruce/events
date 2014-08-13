namespace Events.Backstage.Common.CommonDomain.CommonValidation

open Validation

module Validators =
    let NotEmpty (str : string) : ValidatorResult =
        match str with
        | null | "" -> Error "{:param} is empty."
        | _ -> Success