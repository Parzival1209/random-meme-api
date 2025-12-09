This random meme API was primarily built for https://qwertyhu66.github.io/Useless-Web-Projects, a project I'm working on with a friend.<br>
On the GitHub Pages website for this repository, you can find information on adding, removing, updating, and replacing images in the database.<br>
*Note that currently, the website and API only support adding images to the database.*<br>
<br>
**Instructions on how to use the API**<br>
Use a question mark (?) at the end of the API URL, followed by key-value pairs to set specific parameters. If you don't set any key-value pairs, the API will try to display a simple webpage that shows a single randomly chosen meme using **Google Apps Script HtmlService**.<br>
The key-value pairs must be written in this format: https://example.com?key1=value1&key2=value2.<br>
The parameters currently available are format and count.<br>
The parameter format controls the format of the returned URL(s). The available formats are HTML, JSON, and plain text. Note that setting the format to HTML returns the **entire HTML code** for a simple webpage that displays a single randomly chosen meme **as text.** <br>
The parameter count controls the number of returned URLs. The minimum value count is 1, and the maximum value is the size of the meme database.<br>
<b><u>Important!!! When fetching the API URL using JavaScript, use the fetch method "Get".</u></b><br>
