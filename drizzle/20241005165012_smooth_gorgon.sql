CREATE TABLE IF NOT EXISTS "subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar,
	"stripe_customer_id" text,
	"stripe_subscription_id" text,
	"subscribed" boolean
);
