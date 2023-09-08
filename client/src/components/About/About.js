import about from "../../images/about.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <div
      className="about-background"
      style={{
        backgroundImage: `url(${about})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <article className={styles.article}>
        <h1>Embark on a Literary Odyssey with Book Voyage</h1>
        <p>
          Welcome to Book Voyage, where words come alive and stories take you on
          a journey beyond the bounds of reality. We are not just a catalog of
          books; we are the gateway to worlds waiting to be explored, emotions
          waiting to be felt, and imaginations waiting to be ignited
        </p>
        <p>
          In a world bustling with noise and chaos, Book Voyage stands as a
          sanctuary for bibliophiles and dreamers alike. We understand the magic
          that a well-crafted story can weave, the power of words to transport
          you to distant lands, and the way characters become your companions
          through every page. Our mission is simple: to curate a collection of
          literary treasures that resonate with your soul.
        </p>
        <h3>Why Set Sail with Book Voyage?</h3>
        <p>
          📚 Unveiling the Treasury: Our shelves are adorned with a diverse
          array of books, each waiting for you to discover its secrets. From
          heart-pounding thrillers that keep you up all night, to poetic prose
          that touches the deepest corners of your heart, Book Voyage is a
          treasure trove of literary wonders.
        </p>
        <p>
          🌟 Rate and Relate: Immerse yourself in the world of ratings and
          reviews. Share your thoughts on the books you've encountered and find
          like-minded readers who share your passions. Your voice matters in
          this community of literary explorers.
        </p>
        <p>
          ❤️ Favorites Forever: We understand the connections forged between a
          reader and their most cherished books. Create a constellation of
          favorites, a constellation that tells the story of who you are and the
          tales that have left an indelible mark on your soul.
        </p>
        <p>
          📝 Chart Your Course: The road to literary satisfaction is
          never-ending. That's why we offer you the option to create a "To Read"
          list—a compass that points toward your next adventure. This
          personalized journey ensures that no captivating title slips through
          the cracks.
        </p>
        <h3>Our Crew: Passionate Explorers</h3>
        <p>
          🧚‍♀️The Book Voyage crew is composed of passionate book enthusiasts who
          understand the transformative power of literature. We aren't just
          developers and designers; we are avid readers who have embarked on
          countless literary adventures. Our dedication to creating an intuitive
          platform stems from our belief in the magic of books to change lives.
        </p>
        <h3>Join the Voyage</h3>
        <p>
          ⛵️Whether you're a well-read traveler or just setting sail into the
          literary seas, Book Voyage welcomes you with open pages. Embark on a
          journey through words, discover new realms, and connect with fellow
          travelers who share your ardor for the written word. Book Voyage is
          more than a website; it's an expedition into the heart of human
          imagination.
        </p>
        <p>
          💝Thank you for joining us on this extraordinary expedition. Your next
          great adventure awaits—turn the page and let the voyage begin.
        </p>
      </article>
    </div>
  );
};

export default About;
