export function clearfix() {
  return {
    before: `
      content: "";
      display: table-cell;
    `,
    after: `
      content: "";
      display: table;
      clear: both;
    `
  };
}
