class Timestamp {
  public static getCurrentTimestamp(): string {
    const now: Date = new Date();

    return now.toISOString();
  }
