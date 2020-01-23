# Migration `20200119114726-attach-comments-directly-to-songs`

This migration has been generated by Matt Condon (shrugs) at 1/19/2020, 11:47:26 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "songadayworld"."Song_thread"

ALTER TABLE "songadayworld"."Song" DROP COLUMN "thread";

ALTER TABLE "songadayworld"."Comment" DROP COLUMN "thread",
ADD COLUMN "song" text  NOT NULL ;

ALTER TABLE "songadayworld"."Comment" ADD FOREIGN KEY ("song") REFERENCES "songadayworld"."Song"("id") ON DELETE RESTRICT

DROP TABLE "songadayworld"."Thread";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200119105604-initial..20200119114726-attach-comments-directly-to-songs
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("POSTGRES_URL")
 }
 generator photon {
   provider = "prisma-client-js"
@@ -87,9 +87,9 @@
   topic       Topic
   mood        Mood
   beard       Beard
   instrument  Instrument
-  thread      Thread
+  comments    Comment[]
   releasedAt  DateTime   @default(now())
   createdAt   DateTime   @default(now())
   updatedAt   DateTime   @updatedAt
 }
@@ -107,19 +107,13 @@
   magicCode   MagicCode?
   song        Song?
 }
-model Thread {
-  id       String    @default(cuid()) @id
-  song     Song
-  comments Comment[]
-}
-
 model Comment {
   id        String   @default(cuid()) @id
-  thread    Thread
+  song      Song
+  replyTo   Comment?
   author    User
   text      String
-  replyTo   Comment?
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
 }
```

