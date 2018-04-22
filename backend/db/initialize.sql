create table recipes(
	id integer primary key auto_increment,
    label text,
    url varchar(200)
);

create table ingredients(
	id integer primary key auto_increment,
    text text,
    recipe_id integer
);

create table caution_labels(
	id integer primary key auto_increment,
    text text,
    recipe_id integer
);

create table health_labels(
	id integer primary key auto_increment,
    text text,
    recipe_id integer
);