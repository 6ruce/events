namespace Events.Backstage.Common.CommonStore

open Microsoft.FSharp.Data.TypeProviders

module SqlDbStorage =
    [<Literal>]
    let private connectionString = "Server=94d61f97-cb8b-46b7-abc8-a18d00ee758a.sqlserver.sequelizer.com;Database=db94d61f97cb8b46b7abc8a18d00ee758a;User ID=vbkhzdmqlkueiesf;Password=oS34ZGbRfPd2gvinbNoLAZKXXTayMce4F4i27AmqcQmpeLFepKiM4fTwhdefGKed;"

    type dbSchema = SqlDataConnection<connectionString>
    let db = dbSchema.GetDataContext()