namespace Events.Backstage.Common.CommonPresentation

open Events.Backstage.Common.CommonDomain.Service

module ResponseBuilder =
    type ValidationError() =
        [<DefaultValue>] val mutable Name   : string
        [<DefaultValue>] val mutable Errors : string array

    type ResponseFormat() =
        [<DefaultValue>] val mutable Success           : bool
        [<DefaultValue>] val mutable ValidationErrors  : ValidationError array
        [<DefaultValue>] val mutable ApplicationErrors : string array
    
    let buildSubmition (result : Result) =
        let toValidationError (name, fieldErrors) =
            ValidationError(Name = name, Errors = List.toArray fieldErrors)
        match result with
        | Result.Success                  -> ResponseFormat(Success = true)
        | Result.ValidationErrors errors  -> ResponseFormat(Success = false, ValidationErrors = List.toArray (List.map toValidationError errors))
        | Result.ApplicationErrors errors -> ResponseFormat(Success = false, ApplicationErrors = List.toArray errors)
