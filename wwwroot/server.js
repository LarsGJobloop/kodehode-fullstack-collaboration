/**
 * Querries the server for it's status
 *
 * @returns The server status
 */
export async function GetServerStatus() {
  try {
    const result = await fetch("/api/status");

    if (!result.ok) {
      return "Server is sick!";
    }

    const data = await result.text();

    return data;
  } catch (error) {
    return "No connection to server/network";
  }
}
