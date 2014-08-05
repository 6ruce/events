namespace Events.Backstage.Common.CommonDomain

module Service =
    type Result =
        | Success
        | ValidationErrors of string list
        | PersistanceFail of string