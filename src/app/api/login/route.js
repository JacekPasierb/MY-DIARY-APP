// app/api/login/route.js
import pool from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
require("dotenv").config();



export const POST = async (request) => {
  const { login, password } = await request.json();

  // Pobierz użytkownika z bazy danych
  const userResult = await pool.query(
    'SELECT * FROM "Users" WHERE login = $1',
    [login]
  );
  const user = userResult.rows[0];

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return new Response("Invalid credentials", { status: 401 });
  }

  // Można dodać logikę generowania tokenu lub sesji
  const payload = {
    login: user.login,
    email: user.email, // Możesz dodać dodatkowe dane do payloadu
  };
 
  
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  const updateTokenQuery = `
  UPDATE "Users"
  SET token = $1
  WHERE id = $2
`;
  await pool.query(updateTokenQuery, [token, user.id]);

  return new Response(
    JSON.stringify({
      status: "OK",
      code: 200,
      data: {
        token,
        user: {
          email: user.email,
          login: user.login, // Przy założeniu, że masz pole `username` jako `name`
          // Dodaj inne informacje, które chcesz zwrócić
        },
      },
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
