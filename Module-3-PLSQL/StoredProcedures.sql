-- Procedure 1 : Process Monthly Interest
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE Loans
    SET InterestRate = InterestRate + 0.5;

    COMMIT;
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/
-- Procedure 2 : Update Employee Bonus
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept_name IN VARCHAR2,
    bonus_percent IN NUMBER
)
AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * bonus_percent / 100)
    WHERE Department = dept_name;

    COMMIT;
END;
/

BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/
-- Procedure 3 : Transfer Funds
CREATE OR REPLACE PROCEDURE TransferFunds(
    from_account IN NUMBER,
    to_account IN NUMBER,
    amount IN NUMBER
)
AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance - amount
    WHERE AccountID = from_account;

    UPDATE Accounts
    SET Balance = Balance + amount
    WHERE AccountID = to_account;

    COMMIT;
END;
/

BEGIN
    TransferFunds(301,302,5000);
END;
/
-- Verification Queries
SELECT * FROM Customers;
SELECT * FROM Loans;
SELECT * FROM Accounts;
SELECT * FROM Employees;