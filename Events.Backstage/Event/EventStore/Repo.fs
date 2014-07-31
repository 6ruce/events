namespace Events.Backstage.Event.EventStore

open Events.Backstage.Event.Domain.Service

module EventRepo =
    let save = EventDbRepo.save
    let all = EventDbRepo.all