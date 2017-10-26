

CREATE TABLE [dbo].[Employee]
(
    [Id] [int] IDENTITY(1,1) NOT NULL,
    [FirstName] nvarchar(100) NOT NULL,
    [LastName] nvarchar(100) NOT NULL,    
 CONSTRAINT [PK_Employee] PRIMARY KEY (    [Id])
)