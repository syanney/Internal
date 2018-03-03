using Internal.Common.Validation;

namespace Internal.Queries.Dtos
{
    public class EmployeeSummaryDto
    {
        public EmployeeSummaryDto(int id, string firstName, string lastName)
        {
            ArgumentValidator.EnsureIsNotNullOrWhitespace(firstName, nameof(firstName));
            ArgumentValidator.EnsureIsNotNullOrWhitespace(lastName, nameof(lastName));

            Id = id;
            FirstName = firstName;            
            LastName = lastName;
        }

        public int Id { get; }
        public string FirstName { get; }
        public string LastName { get; }
    }
}
