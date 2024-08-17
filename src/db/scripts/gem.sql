create TABLE gem (
    id serial primary key,
    nome varchar(100) not null,
    logradouro varchar(255) not null,
    cidade varchar(255) not null,
    estado varchar(2) not null,
    cep varchar(12) not null,
    numero varchar(120) not null,
    complemento varchar(255),
    num_alunos integer not null,
    admin_id integer not null,
    createdAt date not null default now(),
    active boolean not null
);