namespace Events.Backstage.Event.EventStore

open System.Linq
open System.Data.Linq
open Events.Backstage.Event.Domain.Service
open Events.Backstage.Common.CommonStore

module EventDbRepo =
    let private mapToDb (event : EventService.Event) : SqlDbStorage.dbSchema.ServiceTypes.Event =
        SqlDbStorage.dbSchema.ServiceTypes.Event(Name = event.Name, Description = event.Description)

    let private mapToDomain (dbEvent : SqlDbStorage.dbSchema.ServiceTypes.Event) : EventService.Event =
        { Name = dbEvent.Name; Description = dbEvent.Description}

    let save (event : EventService.Event) : unit =
        SqlDbStorage.db.Event.InsertOnSubmit (mapToDb event)
        SqlDbStorage.db.DataContext.SubmitChanges ()

    let all () : EventService.Event list =
        SqlDbStorage.all SqlDbStorage.db.Event mapToDomain