//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Managers
    {
        public string MIdentity { get; set; }
        public string MFullName { get; set; }
        public string MUserName { get; set; }
        public string MPassword { get; set; }
        public string NumStatus { get; set; }
        public Nullable<int> MCity { get; set; }
        public Nullable<int> MNumBallotBox { get; set; }
    
        public virtual BallotBox BallotBox { get; set; }
        public virtual City City { get; set; }
        public virtual ManagersStatus ManagersStatus { get; set; }
    }
}
