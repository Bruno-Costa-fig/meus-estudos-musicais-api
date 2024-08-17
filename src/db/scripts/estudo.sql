create table estudos (
  id serial primary key,
  descricao varchar(255) not null,
  type_id integer not null,
  aluno_id integer not null,
  professor_id integer not null,
  createdAt timestamp not null default now(),
  finishedAt timestamp,
  done boolean not null,
    foreign key (type_id) references type_estudo(id),
    foreign key (aluno_id) references aluno(id),
    foreign key (professor_id) references professor(id)
);