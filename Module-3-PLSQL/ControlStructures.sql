-- Scenario 1

BEGIN
    FOR rec IN (
        SELECT c.CustomerID, c.CustomerName, c.Age, l.InterestRate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
    )
    LOOP
        IF rec.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = rec.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/
-- Scenario 2
BEGIN
    FOR rec IN (
        SELECT CustomerID, Balance
        FROM Customers
    )
    LOOP
        IF rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'YES'
            WHERE CustomerID = rec.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/
-- Scenario 3
BEGIN
    FOR rec IN (
        SELECT LoanID,
               CustomerID,
               DueDate
        FROM Loans
    )
    LOOP
        IF rec.DueDate <= SYSDATE + 30 THEN

            DBMS_OUTPUT.PUT_LINE(
                'Reminder : Customer '
                || rec.CustomerID
                || ' Loan '
                || rec.LoanID
                || ' Due on '
                || TO_CHAR(rec.DueDate,'DD-MON-YYYY')
            );

        END IF;
    END LOOP;
END;
/