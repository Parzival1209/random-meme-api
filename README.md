This random meme API was primarily built for https://qwertyhu66.github.io/Useless-Web-Projects, a project I'm working on with a friend.
On the website, you can find the URL to the API, as well as additional information.
/n
**Instructions on how to use the API**/n
Use a question mark (?) at the end of the API URL, followed by key-value pairs to set specific parameters. If you don't set any key-value pairs, the API will try to display a simple webpage that shows a single randomly chosen meme using **Google Apps Script HtmlService**.
The key-value pairs must be written in this format: https://example.com?key1=value1&key2=value2.
The parameters currently available are format and count.
The parameter format controls the format of the returned URL(s). The available formats are HTML, JSON, and plain text. Note that setting the format to HTML returns the HTML code for a simple webpage that shows a single randomly chosen meme **as text.**
The parameter count controls the number of returned URLs. The minimum value count can be is 1 and the maximum value is the meme database size.
