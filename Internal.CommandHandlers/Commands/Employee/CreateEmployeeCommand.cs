namespace Internal.CommandHandlers.Commands.Employee
{
    public class CreateEmployeeCommand : Command
    {
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
    }
}
