export const currencySymbol = (curr: string) =>
  ({
    USD: "$",
    EUR: "€",
    GBP: "£",
  })[curr] ?? curr;
