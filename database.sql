CREATE TABLE "todo" (
	"id"  SERIAL PRIMARY KEY,
	"task" VARCHAR (2048),
	"complete" VARCHAR (24)

);

INSERT INTO "todo" ("task", "complete")
VALUES ('Fold Laundry', 'Uncompleted'); 
