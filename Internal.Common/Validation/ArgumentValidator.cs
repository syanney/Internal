using System;

namespace Internal.Common.Validation
{
    public static class ArgumentValidator
    {
        public static void EnsureIsNotNull(object argument, string parameterName)
        {
            if (argument == null)
            {
                throw new ArgumentNullException(parameterName);
            }
        }

        public static void EnsureIsNotNullOrWhitespace(string argument, string parameterName)
        {
            if (string.IsNullOrWhiteSpace(argument))
            {
                throw new ArgumentException("Argument cannot be null or whitespace", parameterName);
            }
        }
    }
}
