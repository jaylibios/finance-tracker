CREATE TABLE user (
    id serial primary key not null,
    first_name varchar(100) not null,
    email varchar(100) not null,
    password varchar(15) not null,
    date not null default current_date
)