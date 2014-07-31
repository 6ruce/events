namespace Events.Backstage.Event.Domain.Service

module EventService =
    type Event = {
        Name : string;
        Description : string
    }

    let create (saver : Event -> unit) (event : Event) : unit =
        saver event

    let all (obtainer : unit -> Event list) = obtainer ()