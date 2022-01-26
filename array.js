const component = [
  "motherboard",
  "mouse",
  "keyboard",
  "monitor",
  "processor",
  "kabel",
  "RAM",
  "VGA",
  "power supply",
  "CPU Fan",
];

document.write("<ol>");
//menggunakan perulangan untuk mencetak semua isi array
for (let i = 0; i < component.length; i++) {
  document.write(`<li>${component[i]}</li>`);
}
document.write("</ol>");

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript For Loop</h2>

// <p id="demo"></p>

// <script>
// const component = [
//   "motherboard",
//   "mouse",
//   "keyboard",
//   "monitor",
//   "processor",
//   "kabel",
//   "RAM",
//   "VGA",
//   "power supply",
//   "CPU Fan",
//   "heatsink"
// ];

// let text = "";

// for (let i = 1; i <= 10; i++) {
//   text += i + " " + component[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;
// </script>
// <ol>
//   <li>mouse</li>
//   <li>keyboard</li>
//   <li>monitor</li>
//   <li>processor</li>
//   <li>kabel</li>
//   <li>RAM</li>
//   <li>VGA</li>
//   <li>power supply</li>
//   <li>CPU Fan</li>
//   <li>heatsink</li>
// </ol>
// </body>
// </html>
