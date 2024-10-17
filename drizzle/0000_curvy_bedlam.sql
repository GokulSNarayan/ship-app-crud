CREATE TABLE `ships` (
	`ship_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`length` integer NOT NULL,
	`width` integer NOT NULL,
	`code` text NOT NULL,
	`last_updated` text NOT NULL,
	`updated_by` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`user_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`first_name` text NOT NULL,
	`user_name` text NOT NULL,
	`last_updated` text NOT NULL
);
