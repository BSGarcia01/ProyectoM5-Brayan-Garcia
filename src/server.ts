import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";

function crearServidor() {
  const servidor = new McpServer({
    name: "github-mcp-server",
    version: "1.0.0",
  });

  return servidor;
}

serveStdio(crearServidor);
