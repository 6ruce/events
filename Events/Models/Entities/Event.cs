using System;
using System.Text;
using System.Collections.Generic;


namespace Events.Models.Entities {
    
    public class Event {
        public virtual int Id { get; set; }
        public virtual string Login { get; set; }
        public virtual string PasswordHash { get; set; }
        public virtual string PasswordSalt { get; set; }
    }
}
