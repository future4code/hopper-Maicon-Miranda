SELECT * FROM Funcionarios;

SELECT id AS identifier, name FROM Funcionarios;

SELECT * FROM Funcionarios WHERE id = 003;

SELECT * FROM Funcionarios WHERE name LIKE '%a%';

SELECT * FROM Funcionarios WHERE name NOT LIKE '%r%' AND email LIKE "%u%";