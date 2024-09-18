import './App.css'

const App = () => {
  return (
    <>
      <nav id="navigation">
        <h1>Academy Of Skill Development</h1>
        <div id='side'>
        <a href="#">HOME</a>
        <a href="#">ABOUT </a>
        <a href="#">CONTACT</a>
        </div>
        </nav>

       <section className='section'>
       <h2>Who we are?</h2>
       <p>Academy Of Skill Development (ASD) - A unit of Ardent Computech Pvt. Ltd., an MSME, ISO 9001:2015, is a non-profit Govt. registered organization and a subsidiary of Ardent Computech Pvt. Ltd. Ardent has MoU with the AICTE NEAT Cell to conduct Industrial Training and Internships for the students and faculties. ASD has affiliations to conduct global certification as an authorized Certiport test center. Mission of ASD is to develop skills of the candidates to meet the dynamics of demand in the job market. We look forward to bridge the gap between the industry and academia. Recent survey has revealed the huge gap between demand and supply of candidates. Today industry is looking for ready-made candidates with right set of skills. Hence employability enhancement Industrial Training and Internships are very important. At ASD we provide the latest and best Skill Development Industrial Training and Internships.

        </p>
        </section>

        <section id='sec0'>
        <h1>MERN STACK DEVELOPMENT</h1>
        </section>

        <section className='sec'>
          <div className='card'>
            <img src='react.png' />
            <h1>React</h1>
            <p>React is a JavaScript library for building user interfaces (UIs) on the web. React is a declarative, component based library that allows developers to build reusable UI components and It follows the Virtual DOM (Document Object Model) approach, which optimizes rendering performance by minimizing DOM updates. React is fast and works well with other tools and libraries.</p>
           <a href='https://www.w3schools.com/REACT/DEFAULT.ASP'><p>Click to explore</p></a>
          </div>

          <div className='card'>
            <img src='nodeimage.jpg' />
            <h1>Node Js</h1>
            <p>Node.js is an open-source and cross-platform JavaScript runtime environment. It is a powerful tool suitable for a wide range of projects. Node.js stands out as a game-changer. Imagine using the power of JavaScript not only in your browser but also on the server side.Node.js is used to build back-end services like APIs like Web App, Mobile App or Web Server. A Web Server will open a file on the server and return the content to the client. </p>
            <a href='https://www.geeksforgeeks.org/node-js-introduction/'><p>Click to explore</p></a>
          </div>

          <div className='card'>
            <img src='express.png' />
            <h1>Express Js</h1>
            <p>Express. js is a backend framework although it can interact with frontend frameworks like React or Angular ExpressJS, a minimalist web application framework for Node.js, has become synonymous with simplicity, flexibility, and performance in the realm of web development. With its streamlined architecture and powerful features, ExpressJS empowers developers to build robust and scalable web applications with ease.</p>
            <a href='https://www.geeksforgeeks.org/express-js/'><p>Click to explore</p></a>
          </div>

          <div className='card'>
            <img src='mongo.jfif' />
            <h1>React</h1>
            <p>MongoDB stands out as a leading NoSQL database, offering an open-source, document-oriented approach that diverges from traditional relational databases. Unlike SQL databases, MongoDB stores data in BSON format, akin to JSON, allowing for more flexible data storage and retrieval. In this article, We will get a in detailed knowledge about MongoDB.It means that MongoDB isn’t based on the table-like relational database.</p>
            <a href='https://www.w3schools.com/mongodb/'><p>Click to explore</p></a>
          </div>
        </section>

        <footer id='foot'>
          <h3>Guided by-Prof.Subhojit Santra</h3>
          <h3>Submitted by-Abhishek Goud</h3>
          <h3>&#169;goudabhishek669@gmail.com</h3>
        </footer>
    </>
  )
}

export default App