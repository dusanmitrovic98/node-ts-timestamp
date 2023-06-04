class Timestamp {
  public static getCurrentTimestamp(): string {
    const now: Date = new Date();

    return now.toISOString();
  }

  public static getYear(timestamp: string): string {
    const date = new Date(timestamp);
    const year = `${date.getFullYear()}`;

    return year;
  }
