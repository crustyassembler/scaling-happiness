-- Up 
CREATE TABLE Courses (id INTEGER PRIMARY KEY, name TEXT, description TEXT);
INSERT INTO Courses (id, name, description) VALUES (1, 'Business course', 'Teaches u how to sell stuff');
INSERT INTO Courses (id, name, description) VALUES (2, 'Business and Accounting course', 'Counting or something');
INSERT INTO Courses (id, name, description) VALUES (3, 'Bus driving course', 'Beep beep');
INSERT INTO Courses (id, name, description) VALUES (4, 'Technology course', 'Wires and shit');

-- Down 
DROP TABLE Courses;
