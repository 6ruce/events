namespace Events.Backstage.Event.Domain.Service

open Events.Backstage.Common.CommonDomain.Service
open Events.Backstage.Common.CommonDomain.CommonValidators.Validators

module EventService =
    type Event = {
        Name : string;
        Description : string
    }

    type private EventCreateValidators = {
        ForName : Validator<string> list;
        ForDescription : Validator<string> list
    }

    let private createValidators = {
        ForName = [NotEmpty];
        ForDescription = [NotEmpty]
    }

    let private validateCreation validators event =
        let validationData = 
            [
                ("Name", validators.ForName, event.Name);
                ("Description", validators.ForDescription, event.Description);
            ]
        let collectErrors (fieldName, validators, fieldValue) =
            match apply fieldName validators fieldValue with
            | ValidationResult.Success -> None
            | ValidationResult.Errors fieldErrors -> Some(fieldErrors)
        List.choose collectErrors validationData 

    let create (saver : Event -> unit) (event : Event) : Result =
        let validationErrors = validateCreation createValidators event
        match validationErrors with
        | [] -> 
            saver event
            Result.Success
        | _ -> Result.ValidationErrors validationErrors
            

    let all (obtainer : unit -> Event list) = obtainer ()