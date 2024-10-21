CREATE TABLE IF NOT EXISTS "ship" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "ship_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL,
	"width" integer NOT NULL,
	"code" varchar NOT NULL,
	"length" integer NOT NULL,
	"last_updated" timestamp DEFAULT now() NOT NULL,
	"updated_by" varchar
);
