

IF DB_ID('Internal') IS NULL
BEGIN
	CREATE DATABASE Internal
END
GO

USE Internal

IF NOT EXISTS(SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Employee')
BEGIN
	CREATE TABLE [dbo].[Employee]
	(
		[Id] [int] IDENTITY(1,1) NOT NULL,
		[FirstName] NVARCHAR(100) NOT NULL,
		[MiddleName] NVARCHAR(100) NULL,
		[LastName] NVARCHAR(100) NOT NULL,    
	 CONSTRAINT [PK_Employee] PRIMARY KEY (    [Id])
	)
END
