<h1 align="center">📝 Electron Todo Overlay</h1>
<p align="center">
A lightweight Electron-based Todo application that appears on the top-left corner of your screen with a transparent background, showing your tasks in real-time.
</p>

<hr/>

<h2>📌 Overview</h2>
<p>
This is a simple desktop Todo application built with <strong>Electron</strong>.  
When Windows starts (or the app launches), it automatically appears at the <strong>top-left corner</strong> of the screen with a transparent background.  
The layout and positioning of the tasks (span elements) are pre-configured for a clean, unobtrusive overlay.
</p>

<h2>✨ Features</h2>
<ul>
  <li>✅ Display your todos as an overlay on the top-left corner of your desktop</li>
  <li>🎨 Transparent background to blend with your desktop</li>
  <li>🖱️ Minimalistic interface — just your tasks</li>
  <li>⚡ Runs on startup and stays on top of other windows</li>
  <li>💻 Built with Electron, HTML, CSS, and JavaScript</li>
</ul>

<h2>📂 Project Structure</h2>
<pre>
main.js        → Electron main process (window setup & positioning)
index.html      → Front-end HTML layout for todos
style.css       → Styling including transparency
renderer.js     → Handles adding, removing, and rendering todos
package.json    → Project metadata and dependencies
</pre>

<h2>🚀 Installation & Usage</h2>
<ol>
  <li>Clone the repository:
    <pre>git clone https://github.com/samnurollahi/electron-todo.git</pre>
  </li>
  <li>Install dependencies:
    <pre>npm install</pre>
  </li>
  <li>Start the application:
    <pre>npm start</pre>
  </li>
  <li>On launch, the todo overlay appears on the top-left corner of your screen with transparent background.</li>
</ol>

<h2>💡 Notes</h2>
<ul>
  <li>The coordinates and positioning of the todo items are pre-set in the HTML/CSS. You can customize them as needed.</li>
  <li>To have the app start automatically with Windows, add it to your startup folder or configure Electron auto-launch.</li>
</ul>

<h2>🛠 Technologies Used</h2>
<ul>
  <li>Electron</li>
  <li>HTML5 & CSS3</li>
  <li>JavaScript</li>
</ul>

<h2>📄 License</h2>
<p>MIT License</p>

<hr/>
<p align="center">Made with ❤️ using Electron</p>
