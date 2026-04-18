import Image from "next/image";
import {
  // Github,
  // Linkedin,
  Mail,
  ExternalLink,
  FolderGit2,
} from "lucide-react";


export default function Home() {
  const projects = [
    {
      title: "Smart AI Resume Analyzer",
      description:
        "A Streamlit-based AI project that analyzes resumes against job descriptions using Python, NLP, and PDF text extraction.",
      tech: ["Python", "Streamlit", "NLP", "PDF Parsing", "Scikit-learn"],
      image: "/projects/resume-analyzer.jpeg",
      github: "https://github.com/rahna-m/resume-analyzer",
      live: "https://your-live-demo-link.com",
    },
    {
      title: "Data Analysis Dashboard",
      description:
        "An interactive dashboard for exploring trends, reports, and business insights using Python, Pandas, SQL, and visualization tools.",
      tech: ["Python", "Pandas", "SQL", "Visualization"],
      image: "/projects/data-dashboard.jpeg",
      github: "https://github.com/rahna-m/data-analysis-dashboard",
      live: "https://your-live-demo-link.com",
    },
    {
      title: "Web & App Development Projects",
      description:
        "A collection of web and app development work built with PHP, Flutter, React, and Next.js, focused on usability and clean UI.",
      tech: ["PHP", "Flutter", "Next.js", "React","REST APIs"],
      image: "/projects/web-projects.jpeg",
      github: "https://github.com/rahna-m/web-app-projects",
      live: "https://your-live-demo-link.com",
    },
  ];

  const skills = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Streamlit",
    "Machine Learning",
    "Data Analysis",
    "React",
    "Next.js",
    "Flutter",
    "PHP",
    "GitHub",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                Portfolio Website
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Rahna M
              </h1>

              <p className="mt-4 text-lg text-cyan-300 md:text-2xl">
                Aspiring Data Scientist | Ex Web & App Developer
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
                I am transitioning from web and app development into data
                science, combining technical development experience with
                analytical thinking to build real-world, data-driven solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg transition hover:scale-105"
                >
                  View Projects
                </a>

                <a
                  href="https://linkedin.com/in/rahna-mofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  {/* <Linkedin size={18} /> */}
                  LinkedIn
                </a>

                <a
                  href="https://github.com/rahna-m"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  {/* <Github size={18} /> */}
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md rounded-[2rem] border border-cyan-400/20 bg-white/5 p-8 shadow-2xl backdrop-blur">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-center">
                  <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-cyan-400/30">
                    <Image
                      src="/profile.jpeg"
                      alt="Rahna M"
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold">Career Snapshot</h2>
                  <div className="mt-5 space-y-4 text-slate-300">
                    <div>
                      <p className="text-sm text-slate-400">Current Focus</p>
                      <p className="font-medium text-white">
                        Data Science & AI Projects
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">
                        Previous Experience
                      </p>
                      <p className="font-medium text-white">
                        Web Development, Flutter, Next.js
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="font-medium break-all text-white">
                        rahnamofficial@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12"
      >
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-5 leading-8 text-slate-300">
              My journey started with a strong interest in technology, which
              led me into web development and app development. I worked with
              PHP, Flutter, and Next.js, building practical projects and
              strengthening my problem-solving skills.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Now, I am switching my career toward Data Science because I am
              deeply interested in AI, analytics, and predictive systems.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              My goal is to combine my development background with data science
              skills to create impactful, user-focused AI products.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 p-8 shadow-xl">
            <h2 className="text-3xl font-bold">Highlights</h2>
            <div className="mt-6 space-y-5 text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-slate-400">Experience</p>
                <p className="mt-1 font-medium text-white">
                  PHP, Flutter, React, Next.js
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-slate-400">New Direction</p>
                <p className="mt-1 font-medium text-white">
                  Python, SQL, Data Science, AI
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-slate-400">Strengths</p>
                <p className="mt-1 font-medium text-white">
                  Problem Solving, Dedication, Leadership
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12"
      >
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-3 text-slate-300">
            A mix of data science and development work that reflects my
            transition and technical range.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex justify-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-sm font-medium transition hover:bg-slate-700"
                  >
                    <FolderGit2 size={16} />
                    View Code
                  </a>

                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="mt-3 text-slate-300">
            My growing toolkit across development and data science.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200 shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12"
      >
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 shadow-2xl">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            I am open to opportunities in Data Science, AI, analytics-focused
            roles, and related technical positions.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-1 break-all text-lg font-medium text-white">
                rahnamofficial@gmail.com
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm text-slate-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/rahna-mofficial"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-lg font-medium text-cyan-300 hover:underline"
              >
                View Profile
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm text-slate-400">GitHub</p>
              <a
                href="https://github.com/rahna-m"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-lg font-medium text-cyan-300 hover:underline"
              >
                View Repositories
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


// export default function Home() {
//   const projects = [
//     {
//       title: "Smart AI Resume Analyzer",
//       description:
//         "A Streamlit-based project that analyzes resumes against job descriptions using Python and NLP concepts.",
//       tech: ["Python", "Streamlit", "NLP", "PDF Parsing"],
//     },
//     {
//       title: "Data Analysis Dashboard",
//       description:
//         "Interactive dashboard project for exploring data insights, trends, and reports using data analysis tools.",
//       tech: ["Python", "Pandas", "SQL", "Visualization"],
//     },
//     {
//       title: "Web & App Development Projects",
//       description:
//         "Worked on PHP, Flutter, and Next.js projects with focus on clean UI, functionality, and problem solving.",
//       tech: ["PHP", "Flutter", "Next.js", "React"],
//     },
//   ];

//   const skills = [
//     "Python",
//     "SQL",
//     "Pandas",
//     "NumPy",
//     "Streamlit",
//     "Machine Learning",
//     "Data Analysis",
//     "React",
//     "Next.js",
//     "Flutter",
//     "PHP",
//     "GitHub",
//   ];

//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900">
//         <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12">
//           <div className="grid items-center gap-10 md:grid-cols-2">
//             <div>
//               <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
//                 Portfolio Website
//               </p>
//               <h1 className="text-4xl font-bold leading-tight md:text-6xl">
//                 Rahna M
//               </h1>
//               <p className="mt-4 text-lg text-cyan-300 md:text-2xl">
//                 Data Scientist | Ex Web & App Developer
//               </p>
//               <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
//                 I am transitioning from web and app development into data
//                 science, combining technical development experience with
//                 analytical thinking to build real-world, data-driven solutions.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-4">
//                 <a
//                   href="#projects"
//                   className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg transition hover:scale-105"
//                 >
//                   View Projects
//                 </a>
//                 <a
//                   href="#contact"
//                   className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
//                 >
//                   Contact Me
//                 </a>
//               </div>
//             </div>

//             <div className="flex justify-center md:justify-end">
//               <div className="w-full max-w-md rounded-[2rem] border border-cyan-400/20 bg-white/5 p-8 shadow-2xl backdrop-blur">
//                 <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
//                   <div className="mb-6 h-24 rounded-2xl bg-gradient-to-r from-cyan-400/30 to-blue-500/20" />
//                   <h2 className="text-2xl font-semibold">Career Snapshot</h2>
//                   <div className="mt-5 space-y-4 text-slate-300">
//                     <div>
//                       <p className="text-sm text-slate-400">Current Focus</p>
//                       <p className="font-medium text-white">
//                         Data Science & AI Projects
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-slate-400">
//                         Previous Experience
//                       </p>
//                       <p className="font-medium text-white">
//                         Web Development, Flutter, Next.js
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-slate-400">Email</p>
//                       <p className="font-medium text-white break-all">
//                         rahnamofficial@gmail.com
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         id="about"
//         className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12"
//       >
//         <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
//           <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
//             <h2 className="text-3xl font-bold">About Me</h2>
//             <p className="mt-5 leading-8 text-slate-300">
//               My journey started with a strong interest in technology, which
//               led me into web development and app development after completing
//               my computer science degree. I worked with PHP, Flutter, and
//               Next.js, building practical projects and strengthening my
//               problem-solving skills.
//             </p>
//             <p className="mt-4 leading-8 text-slate-300">
//               Now, I am switching my career toward Data Science because I am
//               deeply interested in AI, analytics, and future prediction
//               systems. I enjoy learning how data can be transformed into
//               insights and smart solutions.
//             </p>
//             <p className="mt-4 leading-8 text-slate-300">
//               My goal is to combine my development background with data science
//               skills to create impactful, user-focused AI products.
//             </p>
//           </div>

//           <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 p-8 shadow-xl">
//             <h2 className="text-3xl font-bold">Highlights</h2>
//             <div className="mt-6 space-y-5 text-slate-300">
//               <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
//                 <p className="text-sm text-slate-400">Experience</p>
//                 <p className="mt-1 font-medium text-white">
//                   PHP, Flutter, React, Next.js
//                 </p>
//               </div>
//               <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
//                 <p className="text-sm text-slate-400">New Direction</p>
//                 <p className="mt-1 font-medium text-white">
//                   Python, SQL, Data Science, AI
//                 </p>
//               </div>
//               <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
//                 <p className="text-sm text-slate-400">Strengths</p>
//                 <p className="mt-1 font-medium text-white">
//                   Problem Solving, Dedication, Leadership
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         id="projects"
//         className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12"
//       >
//         <div className="mb-10 flex items-end justify-between gap-4">
//           <div>
//             <h2 className="text-3xl font-bold">Projects</h2>
//             <p className="mt-3 text-slate-300">
//               A mix of data science and development work that reflects my
//               transition and technical range.
//             </p>
//           </div>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {projects.map((project) => (
//             <div
//               key={project.title}
//               className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/40"
//             >
//               <div className="mb-5 h-40 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-slate-800" />
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//               <p className="mt-3 leading-7 text-slate-300">
//                 {project.description}
//               </p>
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {project.tech.map((item) => (
//                   <span
//                     key={item}
//                     className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section
//         id="skills"
//         className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12"
//       >
//         <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
//           <h2 className="text-3xl font-bold">Skills</h2>
//           <p className="mt-3 text-slate-300">
//             My growing toolkit across development and data science.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-3">
//             {skills.map((skill) => (
//               <span
//                 key={skill}
//                 className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200 shadow"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section
//         id="contact"
//         className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12"
//       >
//         <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 shadow-2xl">
//           <h2 className="text-3xl font-bold">Contact</h2>
//           <p className="mt-4 max-w-2xl leading-8 text-slate-300">
//             I am open to opportunities in Data Science, AI, and analytics-focused
//             roles where I can contribute my technical background and continue
//             growing.
//           </p>
//           <div className="mt-8 grid gap-4 md:grid-cols-2">
//             <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
//               <p className="text-sm text-slate-400">Email</p>
//               <p className="mt-1 break-all text-lg font-medium text-white">
//                 rahnamofficial@gmail.com
//               </p>
//             </div>
//             <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
//               <p className="text-sm text-slate-400">Professional Title</p>
//               <p className="mt-1 text-lg font-medium text-white">
//                 Aspiring Data Scientist
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





// export default function RahnaPortfolio() {
//   const projects = [
//     {
//       title: "Smart AI Resume Analyzer",
//       description:
//         "A Streamlit-based project that analyzes resumes against job descriptions using Python and NLP concepts.",
//       tech: ["Python", "Streamlit", "NLP", "PDF Parsing"],
//     },
//     {
//       title: "Data Analysis Dashboard",
//       description:
//         "Interactive dashboard project for exploring data insights, trends, and reports using data analysis tools.",
//       tech: ["Python", "Pandas", "SQL", "Visualization"],
//     },
//     {
//       title: "Web & App Development Projects",
//       description:
//         "Worked on PHP, Flutter, and Next.js projects with focus on clean UI, functionality, and problem solving.",
//       tech: ["PHP", "Flutter", "Next.js", "React"],
//     },
//   ];

//   const skills = [
//     "Python",
//     "SQL",
//     "Pandas",
//     "NumPy",
//     "Streamlit",
//     "Machine Learning",
//     "Data Analysis",
//     "React",
//     "Next.js",
//     "Flutter",
//     "PHP",
//     "GitHub",
//   ];

//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900">
//         <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12">
//           <div className="grid items-center gap-10 md:grid-cols-2">
//             <div>
//               <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
//                 Portfolio Website
//               </p>
//               <h1 className="text-4xl font-bold leading-tight md:text-6xl">
//                 Rahna M
//               </h1>
//               <p className="mt-4 text-lg text-cyan-300 md:text-2xl">
//                 Data Scientist | Ex Web & App Developer
//               </p>
//               <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
//                 I am transitioning from web and app development into data science, combining technical development experience with analytical thinking to build real-world, data-driven solutions.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-4">
//                 <a
//                   href="#projects"
//                   className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg transition hover:scale-105"
//                 >
//                   View Projects
//                 </a>
//                 <a
//                   href="#contact"
//                   className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
//                 >
//                   Contact Me
//                 </a>
//               </div>
//             </div>

//             <div className="flex justify-center md:justify-end">
//               <div className="w-full max-w-md rounded-[2rem] border border-cyan-400/20 bg-white/5 p-8 shadow-2xl backdrop-blur">
//                 <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
//                   <div className="mb-6 h-24 rounded-2xl bg-gradient-to-r from-cyan-400/30 to-blue-500/20" />
//                   <h2 className="text-2xl font-semibold">Career Snapshot</h2>
//                   <div className="mt-5 space-y-4 text-slate-300">
//                     <div>
//                       <p className="text-sm text-slate-400">Current Focus</p>
//                       <p className="font-medium text-white">Data Science & AI Projects</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-slate-400">Previous Experience</p>
//                       <p className="font-medium text-white">Web Development, Flutter, Next.js</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-slate-400">Email</p>
//                       <p className="font-medium text-white break-all">rahnamofficial@gmail.com</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
//         <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
//           <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
//             <h2 className="text-3xl font-bold">About Me</h2>
//             <p className="mt-5 leading-8 text-slate-300">
//               My journey started with a strong interest in technology, which led me into web development and app development after completing my computer science degree. I worked with PHP, Flutter, and Next.js, building practical projects and strengthening my problem-solving skills.
//             </p>
//             <p className="mt-4 leading-8 text-slate-300">
//               Now, I am switching my career toward Data Science because I am deeply interested in AI, analytics, and future prediction systems. I enjoy learning how data can be transformed into insights and smart solutions.
//             </p>
//             <p className="mt-4 leading-8 text-slate-300">
//               My goal is to combine my development background with data science skills to create impactful, user-focused AI products.
//             </p>
//           </div>

//           <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 p-8 shadow-xl">
//             <h2 className="text-3xl font-bold">Highlights</h2>
//             <div className="mt-6 space-y-5 text-slate-300">
//               <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
//                 <p className="text-sm text-slate-400">Experience</p>
//                 <p className="mt-1 font-medium text-white">PHP, Flutter, React, Next.js</p>
//               </div>
//               <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
//                 <p className="text-sm text-slate-400">New Direction</p>
//                 <p className="mt-1 font-medium text-white">Python, SQL, Data Science, AI</p>
//               </div>
//               <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
//                 <p className="text-sm text-slate-400">Strengths</p>
//                 <p className="mt-1 font-medium text-white">Problem Solving, Dedication, Leadership</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
//         <div className="mb-10 flex items-end justify-between gap-4">
//           <div>
//             <h2 className="text-3xl font-bold">Projects</h2>
//             <p className="mt-3 text-slate-300">
//               A mix of data science and development work that reflects my transition and technical range.
//             </p>
//           </div>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {projects.map((project) => (
//             <div
//               key={project.title}
//               className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/40"
//             >
//               <div className="mb-5 h-40 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-slate-800" />
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//               <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {project.tech.map((item) => (
//                   <span
//                     key={item}
//                     className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
//         <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
//           <h2 className="text-3xl font-bold">Skills</h2>
//           <p className="mt-3 text-slate-300">
//             My growing toolkit across development and data science.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-3">
//             {skills.map((skill) => (
//               <span
//                 key={skill}
//                 className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200 shadow"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
//         <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 shadow-2xl">
//           <h2 className="text-3xl font-bold">Contact</h2>
//           <p className="mt-4 max-w-2xl leading-8 text-slate-300">
//             I am open to opportunities in Data Science, AI, and analytics-focused roles where I can contribute my technical background and continue growing.
//           </p>
//           <div className="mt-8 grid gap-4 md:grid-cols-2">
//             <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
//               <p className="text-sm text-slate-400">Email</p>
//               <p className="mt-1 break-all text-lg font-medium text-white">
//                 rahnamofficial@gmail.com
//               </p>
//             </div>
//             <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
//               <p className="text-sm text-slate-400">Professional Title</p>
//               <p className="mt-1 text-lg font-medium text-white">
//                 Aspiring Data Scientist
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }








// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
