import {
    BookOpen,
    Music,
    Coffee
} from "lucide-react";

export const personalDetails = {
    name: "Ankit Mishra",
    role: "Data Analyst",
    location: "New Delhi, India",
    birthplace: "Banaras, Uttar Pradesh, India",
    email: "ankit.mishra@example.com",
    phone: "+91 98765 43210",
    tagline: "Turning raw data into meaningful insights.",
    bio: "I am a passionate Data Analyst based in New Delhi, originally from the cultural heart of India, Banaras. I specialize in transforming complex datasets into actionable business insights through visualization and storytelling. With a strong foundation in statistical analysis and a keen eye for detail, I help organizations make data-driven decisions with confidence.",
    hobbies: [
        { name: "Old Hindi Songs", icon: Music },
        { name: "Reading Novels", icon: BookOpen },
        { name: "Coffee & Code", icon: Coffee },
    ],
    social: {
        linkedin: "https://linkedin.com/in/ankitmishra",
        github: "https://github.com/ankitmishra",
        kaggle: "https://kaggle.com/ankitmishra",
    }
};

export const skills = [
    {
        category: "Data Analysis",
        items: ["Python", "SQL", "R", "Excel", "Pandas", "NumPy"]
    },
    {
        category: "Visualization",
        items: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"]
    },
    {
        category: "Machine Learning",
        items: ["Scikit-learn", "Regression", "Classification", "Clustering", "EDA"]
    },
    {
        category: "Tools & Others",
        items: ["Git", "Jupyter", "VS Code", "Data Cleaning", "Statistical Analysis"]
    }
];

export const projects = [
    {
        id: 1,
        title: "Sales Performance Dashboard",
        description: "Interactive Power BI dashboard tracking regional sales performance, identifying key growth areas and underperforming sectors.",
        tools: ["Power BI", "SQL", "Excel"],
        image: "/images/project-sales.jpg",
        link: "#"
    },
    {
        id: 2,
        title: "Customer Churn Prediction",
        description: "Machine learning model to predict customer churn for a telecom provider, achieving 85% accuracy using Random Forest.",
        tools: ["Python", "Scikit-learn", "Pandas"],
        image: "/images/project-churn.jpg",
        link: "#"
    },
    {
        id: 3,
        title: "E-commerce Segmentation",
        description: "Customer segmentation analysis using RFM (Recency, Frequency, Monetary) modeling to optimize marketing campaigns.",
        tools: ["Python", "SQL", "Clustering"],
        image: "/images/project-segmentation.jpg",
        link: "#"
    },
    {
        id: 4,
        title: "COVID-19 Data Exploration",
        description: "Comprehensive exploratory data analysis of global COVID-19 trends, visualizing infection rates and recovery statistics.",
        tools: ["SQL", "Tableau"],
        image: "/images/project-covid.jpg",
        link: "#"
    },
    {
        id: 5,
        title: "Financial Analysis Dashboard",
        description: "Excel-based financial dashboard for tracking expenses, revenue, and profit margins with dynamic charts and slicers.",
        tools: ["Excel", "VBA"],
        image: "/images/project-finance.jpg",
        link: "#"
    },
    {
        id: 6,
        title: "Marketing Campaign Analysis",
        description: "Analyzed marketing campaign performance data to recommend budget allocation strategies for maximum ROI.",
        tools: ["R", "Ggplot2"],
        image: "/images/project-marketing.jpg",
        link: "#"
    }
];

export const experience = [
    {
        id: 1,
        role: "Data Analyst",
        company: "Tech Solutions India",
        location: "New Delhi",
        period: "2023 - Present",
        description: "Leading data visualization initiatives and automating reporting processes. Reduced report generation time by 40% using Python scripts."
    },
    {
        id: 2,
        role: "Data Analyst Intern",
        company: "DataWise Analytics",
        location: "Noida",
        period: "2022 - 2023",
        description: "Assisted in data cleaning and preparation for client projects. Created weekly performance dashboards using Power BI."
    }
];

export const education = [
    {
        id: 1,
        degree: "B.Sc. in Data Science",
        institution: "University of Delhi",
        period: "2019 - 2022",
        description: "Graduated with First Class Honors. specialized in Statistical Methods and Machine Learning."
    },
    {
        id: 2,
        degree: "Data Science Certification",
        institution: "Coursera / IBM",
        period: "2022",
        description: "Professional Certificate in Data Science, covering Python, SQL, and Machine Learning."
    }
];
