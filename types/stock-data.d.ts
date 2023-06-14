declare module "stock-data" {
  interface Stock {
    date: Date;
    open: Number;
    high: Number;
    low: Number;
    close: Number;
    adjClose: Number;
    volume: Number;
  }
}
