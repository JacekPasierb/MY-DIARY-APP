// app/api/register/route.js
import pool from "@/lib/db";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

export const POST = async (request) => {
  const { username, password, email } = await request.json();

  console.log("elo");

  // Sprawdź, czy użytkownik już istnieje
  const existingUser = await pool.query(
    'SELECT * FROM "Users" WHERE username = $1',
    [username]
  );
  console.log("elo1", existingUser);
  if (existingUser.rows.length > 0) {
    return new Response("User already exists", { status: 400 });
  }
  console.log("elo2");
  // Haszowanie hasła
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("elo3");
  // Dodanie użytkownika do bazy danych
  const verificationToken = nanoid();
  await pool.query(
    `INSERT INTO "Users" ("username", "password", "email", "verificationToken", "token","createdAt", "updatedAt")
     VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
    [username, hashedPassword, email, verificationToken, null]
  );
  console.log("elo4");
  return new Response("User registered successfully", { status: 201 });
};
