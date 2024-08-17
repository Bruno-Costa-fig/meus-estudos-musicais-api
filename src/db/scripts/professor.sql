create table professor (
    id serial primary key,
    nome varchar(100) not null,
    gem_id integer not null,
    usuario_id integer not null,
    createdAt date not null default now(),
    active boolean not null,
    foreign key (usuario_id) references usuarios(id),
    foreign key (gem_id) references gem(id)
);

