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

  public static getMonth(timestamp: string): string {
    const date: Date = new Date(timestamp);
    const month: string = ("0" + (date.getMonth() + 1)).slice(-2);

    return month;
  }

  public static getDay(timestamp: string): string {
    const date: Date = new Date(timestamp);
    const day: string = ("0" + date.getDate()).slice(-2);

    return day;
  }

  public static getHours(timestamp: string): string {
    const date: Date = new Date(timestamp);
    const hours: string = ("0" + date.getHours()).slice(-2);

    return hours;
  }
  public static getMinutes(timestamp: string): string {
    const date: Date = new Date(timestamp);
    const minutes: string = ("0" + date.getMinutes()).slice(-2);

    return minutes;
  }
  public static getSeconds(timestamp: string): string {
    const date: Date = new Date(timestamp);
    const seconds: string = ("0" + date.getSeconds()).slice(-2);

    return seconds;
  }

  public static getDate(timestamp: string, separator?: string): string {
    const year: string = this.getYear(timestamp);
    const month: string = this.getMonth(timestamp);
    const day: string = this.getDay(timestamp);
    const separatorValue = separator || "-";
