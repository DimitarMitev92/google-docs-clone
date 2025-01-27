export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview</h2>
      <p>Brief description of the proposed software development project.</p>
      <h2>Scope of Work</h2>
      <p>Detailed breakdown of project deliverables and requirements.</p>
      <h2>Timeline</h2>
      <p>Project milestones and delivery schedule.</p>
      <h2>Budget</h2>
      <p>Cost breakdown and payment terms.</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <h1>Project Proposal</h1>
    <h2>Project Title</h2>
    <p>Provide a brief title for the project here.</p>

    <h2>Project Overview</h2>
    <p>Provide a brief description of the project, outlining its goals, objectives, and scope.</p>

    <h2>Project Timeline</h2>
    <p>Describe the planned timeline for the project, including key milestones and deadlines.</p>

    <h2>Budget</h2>
    <p>Detail the estimated budget for the project, including any expenses related to resources, equipment, or personnel.</p>

    <h2>Team Members</h2>
    <p>List the key members of the project team and their roles or responsibilities.</p>

    <h2>Expected Outcomes</h2>
    <p>Explain the expected results and impact of the project upon completion.</p>

    <h2>Conclusion</h2>
    <p>Provide a concluding statement summarizing the project’s goals, its potential impact, and any additional relevant information.</p>
`,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    <h1>Business Letter</h1>

    <p><strong>From:</strong></p>
    <p>Your Name</p>
    <p>Your Address</p>
    <p>City, State, Zip Code</p>
    <p>Email Address</p>
    <p>Phone Number</p>

    <br>

    <p><strong>To:</strong></p>
    <p>Recipient's Name</p>
    <p>Recipient's Position</p>
    <p>Company Name</p>
    <p>Company Address</p>
    <p>City, State, Zip Code</p>

    <br>

    <p><strong>Date:</strong> [Date]</p>

    <br>

    <p><strong>Dear [Recipient's Name],</strong></p>

    <p>[Opening paragraph: Begin with a greeting or reason for writing.]</p>

    <p>[Second paragraph: Provide details about the purpose of the letter. Be concise and clear.]</p>

    <p>[Closing paragraph: Summarize the key points, or include a call to action if applicable.]</p>

    <p>Thank you for your time and consideration.</p>

    <br>

    <p><strong>Sincerely,</strong></p>

    <p>Your Name</p>

    <p>[Your Title]</p>
    <p>[Company Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
       <header>
        <h1>John Doe</h1>
        <p>Email: john.doe@example.com | Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, City, Country</p>
    </header>

    <section>
        <h2>Objective</h2>
        <p>To secure a challenging position in a reputable organization to expand my learning, knowledge, and skills.</p>
    </section>

    <section>
        <h2>Education</h2>
        <ul>
            <li>
                <strong>Bachelor of Science in Computer Science</strong><br>
                University Name, Graduation Year
            </li>
            <li>
                <strong>High School Diploma</strong><br>
                School Name, Graduation Year
            </li>
        </ul>
    </section>

    <section>
        <h2>Experience</h2>
        <ul>
            <li>
                <strong>Software Developer</strong><br>
                Company Name, Start Year – End Year<br>
                Responsibilities:
                <ul>
                    <li>Developed and maintained web applications.</li>
                    <li>Collaborated with cross-functional teams.</li>
                </ul>
            </li>
            <li>
                <strong>Intern</strong><br>
                Company Name, Start Year – End Year<br>
                Responsibilities:
                <ul>
                    <li>Assisted in developing features for internal tools.</li>
                    <li>Performed software testing and debugging.</li>
                </ul>
            </li>
        </ul>
    </section>

    <section>
        <h2>Skills</h2>
        <ul>
            <li>Programming Languages: Python, JavaScript, C++</li>
            <li>Web Technologies: HTML, CSS</li>
            <li>Version Control: Git</li>
        </ul>
    </section>

    <section>
        <h2>Achievements</h2>
        <ul>
            <li>Recipient of the XYZ Scholarship for academic excellence.</li>
            <li>Developed an award-winning project for a hackathon.</li>
        </ul>
    </section>

    <section>
        <h2>References</h2>
        <p>Available upon request.</p>
    </section>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
       <header>
        <h1>John Doe</h1>
        <p>Email: john.doe@example.com | Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Date: January 27, 2025</p>
    </header>

    <section>
        <p>
            Hiring Manager<br>
            Company Name<br>
            Address Line 1<br>
            City, Country<br>
        </p>
    </section>

    <section>
        <p>Dear [Hiring Manager's Name],</p>
        <p>
            I am excited to apply for the [Position Title] role at [Company Name]. With my background in [Your Field/Area], I am confident that I can bring value to your team and contribute to the success of your organization.
        </p>
        <p>
            My experience includes [briefly highlight relevant experience, e.g., "developing web applications that improved user engagement by 30%"]. I take pride in my ability to [mention a key skill or accomplishment], and I am eager to bring this expertise to [Company Name].
        </p>
        <p>
            In addition to my professional skills, I am passionate about [mention any relevant personal quality or passion that aligns with the role]. I am particularly impressed by [something specific about the company, e.g., "your commitment to innovation and sustainability"] and would be honored to contribute to that mission.
        </p>
        <p>
            I would welcome the opportunity to discuss how my skills and experiences align with the needs of your team. Thank you for considering my application. I look forward to the possibility of contributing to [Company Name]'s success.
        </p>
        <p>Sincerely,</p>
        <p>John Doe</p>
    </section>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
     <header>
        <p>
            John Doe<br>
            123 Main Street<br>
            City, Country<br>
            Email: john.doe@example.com<br>
            Phone: (123) 456-7890<br>
        </p>
        <p>Date: January 27, 2025</p>
    </header>

    <section>
        <p>
            Recipient's Name<br>
            Title/Position<br>
            Company/Organization Name<br>
            Address Line 1<br>
            City, Country<br>
        </p>
    </section>

    <section>
        <p>Dear [Recipient's Name],</p>
        <p>
            I hope this message finds you well. I am writing to [state the purpose of the letter, e.g., "express my interest in your recent publication" or "follow up on our recent discussion regarding..."]. 
        </p>
        <p>
            [Include any relevant details or context, e.g., "During our previous meeting, we discussed opportunities for collaboration, and I wanted to expand on how we could work together."]
        </p>
        <p>
            [Add a concluding paragraph, e.g., "Thank you for taking the time to consider this matter. Please do not hesitate to reach out if you have any questions or require further information."]
        </p>
        <p>
            I look forward to your response and hope to stay in touch. Thank you again for your time and consideration.
        </p>
        <p>Sincerely,</p>
        <p>John Doe</p>
    </section>
    `,
  },
];
