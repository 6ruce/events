namespace Events.Backstage.Common.CommonDomain

open Events.Backstage.Common.CommonDomain.CommonValidators.Validators

module Service =
    type Result =
        | Success
        | ValidationErrors of (string * string list) list
        | ApplicationErrors of string list