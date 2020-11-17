CREATE TABLE test_table(
id serial primary key,
first_name varchar(100) not null,
last_name varchar(100) not null
);

select * from test_table;

insert into test_table (first_name, last_name) values ('Jane', 'Doe');

DROP TABLE test_table;