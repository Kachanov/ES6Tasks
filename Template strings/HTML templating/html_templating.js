function html(strings, ...values) {
     return strings[0] + escapeHTML(values)[0] + strings[1] + values[1] + strings[2];
}

const mustEscape = '<>&"';
console.log(html`You should escape the ${mustEscape.length} characters “${mustEscape}” in HTML`);

function escapeHTML(string) {
     return String(string).replace(/"/g, "&quot;").replace(/</g, "&lt;")
         .replace(/>/g, "&gt;").replace(/&/g, "&amp;");
}
