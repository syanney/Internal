using Internal.Common.Validation;

namespace Internal.Queries.Dtos
{
    public class EmployeeDetailsDto
    {
        public EmployeeDetailsDto(int id, string firstName, string middleName, string lastName)
        {
            ArgumentValidator.EnsureIsNotNullOrWhitespace(firstName, nameof(firstName));
            ArgumentValidator.EnsureIsNotNullOrWhitespace(lastName, nameof(lastName));

            Id = id;
            FirstName = firstName;
            MiddleName = middleName;
            LastName = lastName;
        }

        public int Id { get; }
        public string FirstName { get; }
        public string MiddleName { get; }
        public string LastName { get; }
    }
}
