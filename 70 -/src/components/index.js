import project1 from "../assets/poke.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/expense.png";
import project4 from "../assets/movie.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "PokéInfo",
    image: project1,
    description:
      "My Pokédex project uses an API to create an interface where users can look up information on different Pokémon by searching for them by name. The simple interface allows for easy navigation, giving users the ability to discover specific details about their chosen Pokémon.",
    technologies: ["ReactJS"],
    link: "https://fk-pokeinfo.netlify.app"
  },
  {
    title: "Image Gallery",
    image: project2,
    description:
      "My image gallery site uses React and Tailwind CSS to create an interface where users can browse and view various images. The simple interface allows for easy navigation, offering users the ability to explore and enjoy a wide range of images with a clean and responsive design. Tailwind CSS provides utility-first styling, ensuring a modern and consistent look across different devices, while React enables a dynamic and interactive user experience.",
    technologies: ["ReactJS", "TailwindCSS"],
    link: "https://image-gallery-fk.netlify.app"
  },
  {
    title: "Expense Tracker",
    image: project3,
    description:
      "My expense tracker application uses React and Tailwind CSS to create an interface where users can manage and track their expenses. The simple interface allows for easy navigation, offering users the ability to add, edit, and delete expense entries with a clean and responsive design. Tailwind CSS provides utility-first styling, ensuring a modern and consistent look across different devices, while React enables a dynamic and interactive user experience, allowing users to efficiently monitor their financial activities.",
    technologies: ["ReactJS", "TailwindCSS"],
    link: "https://expense-tracker-fk.netlify.app"
  },
  {
    title: "Film Finder",
    image: project4,
    description:
      "My movie search app uses React and Tailwind CSS to create an interface where users can look up information on different movies by searching for them by title. The simple interface allows for easy navigation, offering users the ability to discover specific details about their chosen movies with a clean and responsive design. Tailwind CSS provides utility-first styling, ensuring a modern and consistent look across different devices, while React enables a dynamic and interactive user experience, allowing users to efficiently find and explore movie details.",
    technologies: ["ReactJS", "TailwindCSS"],
    link: "https://filmfinder-api-fk.netlify.app"
  },
];

export const CONTACT = {
  address: "700 Avenue, New York, NY 10563 ",
  phoneNo: "+01 0101 010 10",
  email: "example@example.com",
};
