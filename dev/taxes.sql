CREATE TABLE taxes(
	sid text,
	id uuid PRIMARY KEY,
	position smallint,
	created_at timestamp,
	created_meta timestamp,
	updated_at timestamp,
	updated_meta timestamp,
	meta text,
	property_id text,
	block text,
	lot text,
	ward text,
	sect text,
	property_address text,
	lot_size text,
	city_tax real,
	state_tax real,
	res_code text,
	amount_due real,
	as_of_date timestamp,
	neighborhood_id integer,
	police_district_id integer,
	council_district_id integer,
	location_lat real,
	location_long real,
	computed_region_a integer,
	computed_region_b integer,
	computed_region_c integer
);

CREATE TABLE neighborhoods(
	id serial,
	name text
);

CREATE TABLE police_districts(
	id serial,
	name text
);

CREATE TABLE council_districts(
	id serial,
	name text
);

ALTER TABLE taxes owner to baltimore;
ALTER TABLE neighborhoods owner to baltimore;
ALTER TABLE police_districts owner to baltimore;
ALTER TABLE council_districts owner to baltimore;
