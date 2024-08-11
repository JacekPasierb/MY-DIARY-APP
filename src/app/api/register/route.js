// app/api/register/route.js
import pool from "@/lib/db";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

export const POST = async (request) => {
  const { login, password, email } = await request.json();

  // Sprawdź, czy użytkownik już istnieje
  const existingUser = await pool.query(
    'SELECT * FROM "Users" WHERE login = $1',
    [login]
  );
  if (existingUser.rows.length > 0) {
    return new Response("User already exists", { status: 400 });
  }

  // Haszowanie hasła
  const hashedPassword = await bcrypt.hash(password, 10);
  // Dodanie użytkownika do bazy danych
  const verificationToken = nanoid();

  const result = await pool.query(
    `INSERT INTO "Users" ("login", "password", "email", "verificationToken", "token","createdAt", "updatedAt")
     VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      RETURNING id, login, email, "verificationToken", token`,
    [login, hashedPassword, email, verificationToken, null]
  );

  const newUser = result.rows[0];

  return new Response(
    JSON.stringify({
      status: "CREATED",
      code: 201,
      data: {
        token: newUser.token,
        user: {
          email: newUser.email,
          login: newUser.login,
        },
      },
    }),
    { status: 201, headers: { "Content-Type": "application/json" } }
  );
};
