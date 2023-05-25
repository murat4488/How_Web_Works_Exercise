
Part One: Solidify Terminology
What is HTTP?
HTTP is a Hypertext Transfer Protocol not securty that is helps communication between web server and web browser

What is a URL?
URL is Uniform Resource Locator that an address to resource on the internet

What is DNS?
DNS means Domain Name System. It translates human readble name to machine readle IP address 

What is a query string?
Part of url and show us particular area that key pear value

What are two HTTP verbs and how are they different?
Get and Post. Get retrieves data from the server. Post adds new data to the server

What is an HTTP request?
To specify what we need of data you are sending to the server

What is an HTTP response?
To specify what we need of data you want to get to the server

What is an HTTP header?
To specify what kind of data you send to the server
For example, "Content-Type: application/json", "Accept-Language: en-US,en;q=0.9"

What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
Browser sends the HTTP request to the server. Server processes request and sends back a response. 


Part Two: Practice Tools
1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate”
curl -X GET "https://icanhazdadjoke.com/search?term=pirate"   

2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com*
dig https://icanhazdadjoke.com/

3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser.
write in the terminal python3 -m http.server

Part Three: Explore Dev Tools
When I use get or post method I get 200 status code and query is just question mark!

Part Four: Explore the URL API
const url = new URL('search?term=pirate', 'https://icanhazdadjoke.com/');
console.log(url.hostname);
console.log(url.pathname);




