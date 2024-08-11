import pool from "@/lib/db";
import jwt from "jsonwebtoken";
import 'dotenv/config';

export async function GET(request) {
  try {
    console.log("Endpoint start");
    
    // Pobierz token z nagłówka autoryzacji
    const authHeader = request.headers.get('Authorization');
    console.log("Endpoint authHeader:", authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const token = authHeader.split(' ')[1];
    console.log("Endpoint token:", token);
    console.log("Endpoint secret:", process.env.JWT_SECRET);

    // Weryfikacja tokenu
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Endpoint decode:", decoded);

    const { email } = decoded;
    console.log("Endpoint id:", email);

    // Pobierz użytkownika z bazy danych
    const userResult = await pool.query(
      'SELECT id, login, email   FROM "Users" WHERE email = $1',
      [email]
    );
    
    const user = userResult.rows[0];
    console.log("Endpoint user:", user);

    if (!user) {
      return new Response(
        JSON.stringify({ error: "User not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Zwróć dane użytkownika
    return new Response(
      JSON.stringify({
        status: "OK",
        code: 200,
        data: {
          userId: user.id,
          email: user.email,
          login: user.login,
          
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
