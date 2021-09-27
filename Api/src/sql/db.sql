CREATE TABLE IF NOT EXISTS public.person
(
id_person serial NOT NULL,
number_identification character varying(30) NOT NULL,
full_name character varying(100) NOT NULL,
full_last_name character varying(100) NOT NULL,
birthdate date NOT NULL,
sex character varying(1) NOT NULL,
PRIMARY KEY (id_person)
);