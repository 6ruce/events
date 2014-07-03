namespace Events.Backstage.Event.Controllers

open System.Web.Http

type EventViewModel() = 
    [<DefaultValue>] val mutable Name : string
    [<DefaultValue>] val mutable Description : string

type EventController() =
    inherit ApiController()

    let toViewModel (name : string, description : string) : EventViewModel =
        EventViewModel (Name = name, Description = description)

    static let mutable storage : (string * string) array = 
                    [| 
                    ("Opening..", "Place some opening here"); 
                    ("Cool stuff happens !!!", "Some very cool staff happens, you know") 
                    |]

    member x.Get() = Array.map toViewModel storage

    member x.Post(event : EventViewModel) = 
        storage <- Array.append storage [|(event.Name, event.Description)|]