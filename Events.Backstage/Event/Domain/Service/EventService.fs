namespace Events.Backstage.Event.Domain.Service

open Events.Backstage.Common.CommonDomain.Service
open Events.Backstage.Common.CommonDomain.CommonValidation.Validation
open Events.Backstage.Common.CommonDomain.CommonValidation.Validators

module EventService =
    type Event = {
        Name : string;
        Description : string
    }

    type private EventCreationValidators = {
        ForName : Validator<string> list;
        ForDescription : Validator<string> list
    }

    let private creationValidators = {
        ForName = [NotEmpty];
        ForDescription = [NotEmpty]
    }

    let private validateCreation validators event =
        let validationData = 
            [
                ("Name", validators.ForName, event.Name);
                ("Description", validators.ForDescription, event.Description);
            ]
        validate validationData

    let create (saver : Event -> unit) (event : Event) : Result =
        let validationErrors = validateCreation creationValidators event
        match validationErrors with
        | [] -> 
            saver event
            Result.Success
        | _ -> Result.ValidationErrors validationErrors
            

    let all (obtainer : unit -> Event list) = obtainer ()