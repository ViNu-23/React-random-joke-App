<h1>React Dad Joke Web Application</h1>

    <section>
        <h2>Initial Joke Load:</h2>
        <ul>
            <li>The component initially loads with an empty joke.</li>
            <li>The <code>useEffect</code> hook is used to fetch a joke from the API when the component mounts.</li>
            <li>The fetched joke is then stored in the component's state using the <code>setJoke</code> function.</li>
        </ul>
    </section>

    <section>
        <h2>Dynamic Button and Body Color:</h2>
        <ul>
            <li>The component has a button labeled "New Joke."</li>
            <li>The button and the body of the container have dynamic colors.</li>
            <li>The initial color of the button is set to "#3498db," and the body color is set to "#87CEFA."</li>
            <li>When the "New Joke" button is clicked, the <code>handleClick</code> function is triggered.</li>
            <li>The <code>getRandomColor</code> function generates a random hexadecimal color, and the button color is updated to this new color using the <code>setButtonColor</code> function.</li>
            <li>Additionally, the <code>getRandomColor</code> function is used to set a new random color for the body background, creating a visually dynamic experience.</li>
        </ul>
    </section>

    <section>
        <h2>Fetching New Jokes:</h2>
        <ul>
            <li>When the "New Joke" button is clicked, the <code>handleClick</code> function is called.</li>
            <li>This function triggers a new API request to fetch a fresh dad joke.</li>
            <li>The fetched joke is then updated in the component's state using the <code>setJoke</code> function.</li>
        </ul>
    </section>

    <section>
        <h2>Console Logging:</h2>
        <ul>
            <li>The fetched joke is logged to the console using <code>console.log(joke)</code>.</li>
            <li>This can be useful for debugging or understanding the flow of data.</li>
        </ul>
    </section>

    <section>
        <h2>Styling:</h2>
        <ul>
            <li>The title "Try Not to Laugh 😂" is displayed with a color dynamically set based on the button color.</li>
            <li>The joke text is displayed in a paragraph with the class "joke-text."</li>
            <li>The "New Joke" button has a class "btn new-joke-btn" and its background color dynamically changes.</li>
        </ul>
    </section>

    <section>
        <h2>Overall:</h2>
        <p>This project demonstrates the integration of React with external APIs, dynamic color changes, and handling user interactions to create a light-hearted and visually appealing dad joke web application.</p>
    </section>