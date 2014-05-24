using System;
using NHibernate.Cfg;

namespace Events
{
    public static class NHibernateConfig
    {
        public static Configuration Configure() 
        {
            return new Configuration().Configure();
        }
    }
}