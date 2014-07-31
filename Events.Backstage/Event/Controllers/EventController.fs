namespace Events.Backstage.Event.Controllers

open System.Web.Http
open Events.Backstage.Event.Domain.Service
open Events.Backstage.Event.EventStore

type EventViewModel() =
    [<DefaultValue>] val mutable Name : string
    [<DefaultValue>] val mutable Description : string

type EventController() =
    inherit ApiController()

    let toViewModel (event : EventService.Event) : EventViewModel =
        EventViewModel (Name = event.Name, Description = event.Description)
        
    let toDomainModel (event : EventViewModel ) : EventService.Event =
        { Name = event.Name; Description = event.Description}

    member x.Get() = List.map toViewModel (EventService.all EventRepo.all)

    member x.Post(event : EventViewModel) =
        EventService.create EventRepo.save <| toDomainModel event