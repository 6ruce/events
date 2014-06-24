namespace Events.Backstage.Event.Controllers

open System.Web.Http

type EventController() =
    inherit ApiController()

    let values = [| "Ford"; "Nissan" |]

    member x.Get() = values