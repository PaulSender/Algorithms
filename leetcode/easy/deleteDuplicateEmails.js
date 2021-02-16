//SQL QUESTION!!!

/*
Delete all duplicates from a database, keeping the one entry with the smallest id
    - Output entire table
    - One query task
    - Need to save one entry
*/

// delete p2 from Person p1 JOIN person p2 on p1.email = p2.email and p1.Id < p2.Id

// Notes: 
/*
    - Different than POSTGRESQL
    - Can't debug outputs very well like you do in pgAdmin
    - SQL seems to be able to understand entire table objects as if they were entries (see "delete p2"). I never experienced this with Postgresql or never tried...
        Always thought you needed to do p2.* or something (which also works)
    - If you change delete to select, you get the orignal list-- delete in MySQL returns results unlike PostgreSQL that only returns the count deleted
    - Operators are very powerful, I didn't think to use the greater than operator in a join. 

*/

// Takeaways: Can return rows with statements other than select, these types of questions are really like a puzzel-- they have parts but if you can't debug you need to get all of the parts correct at the same time.
// Cont.: Joins always need a common ground to link to each other, then do the condition.