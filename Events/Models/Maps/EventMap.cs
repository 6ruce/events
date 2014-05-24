using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using NHibernate.Mapping.ByCode.Conformist;
using NHibernate.Mapping.ByCode;
using Events.Models.Entities;


namespace Events.Models.Maps {
    
    
    public class EventMap : ClassMapping<Event> {
        
        public EventMap() {
			Table("Events");
			Lazy(true);
			Id(x => x.Id, map => map.Generator(Generators.Identity));
			Property(x => x.Login, map => map.NotNullable(true));
			Property(x => x.PasswordHash, map => map.NotNullable(true));
			Property(x => x.PasswordSalt, map => map.NotNullable(true));
        }
    }
}
