namespace Events.Backstage.Event.EventStore

open System.Linq
open System.Data.Linq
open Events.Backstage.Event.Domain.Service
open Events.Backstage.Common.CommonStore

module EventDbRepo =
    let save (event : EventService.Event) : unit =
        let eventInDb = SqlDbStorage.dbSchema.ServiceTypes.Event(Name = event.Name, Description = event.Description)
        SqlDbStorage.db.Event.InsertOnSubmit(eventInDb);
        SqlDbStorage.db.DataContext.SubmitChanges()

    let private mapToDomainEvent (dbEvent : SqlDbStorage.dbSchema.ServiceTypes.Event) : EventService.Event =
        { Name = dbEvent.Name; Description = dbEvent.Description}

    let all () : EventService.Event list =
        (query {
            for row in SqlDbStorage.db.Event do
            select row
        }).AsEnumerable() 
        |> (Seq.map mapToDomainEvent)
        |> Seq.toList