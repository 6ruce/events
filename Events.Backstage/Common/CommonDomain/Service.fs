namespace Events.Backstage.Common.CommonDomain

open Events.Backstage.Common.CommonDomain.CommonValidation.Validators

module Service =
    type Result =
        | Success
        | ValidationErrors of (string * string list) list
        | ApplicationErrors of string list

    let withValidParameters validationErrors action = 
        match validationErrors with
            | [] -> 
                action ()
                Result.Success
            | _ -> Result.ValidationErrors validationErrors