// app/api/login/route.js
import pool from "@/lib/db";
import bcrypt from "bcrypt";
export const POST = async (request) => {
  const { username, password } = await request.json();

  // Pobierz użytkownika z bazy danych
  const userResult = await pool.query(
    'SELECT * FROM "Users" WHERE username = $1',
    [username]
  );
  const user = userResult.rows[0];

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return new Response("Invalid credentials", { status: 401 });
  }

  // Można dodać logikę generowania tokenu lub sesji

  return new Response("Login successful", { status: 200 });
};
