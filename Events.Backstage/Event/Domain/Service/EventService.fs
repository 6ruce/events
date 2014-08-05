namespace Events.Backstage.Event.Domain.Service

open Events.Backstage.Common.CommonDomain.Service

module EventService =
    type Event = {
        Name : string;
        Description : string
    }

    let create (saver : Event -> unit) (event : Event) : Result =
        saver event

    let all (obtainer : unit -> Event list) = obtainer ()