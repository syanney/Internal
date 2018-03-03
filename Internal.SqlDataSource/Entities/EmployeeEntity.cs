using System.ComponentModel.DataAnnotations.Schema;

namespace Internal.SqlDataSource.Entities
{   
    [Table("Employee")]
    public class EmployeeEntity
    {       
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
    }
}
