class Database {
  private uri: string;
  private provider: string;
  private connection: string;

  constructor(uri: string, provider: string) {
    this.uri = uri;
    this.provider = provider;
    this.connection = "";
  }

  connectionDB() {
    try {
      this.connection = "this is connection ";
    } catch (error) {
      throw new Error(error);
    }
  }
}

const conn = new Database("test", "domain.com");
conn.connectionDB();
